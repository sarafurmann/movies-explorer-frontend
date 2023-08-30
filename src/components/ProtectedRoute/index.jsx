import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CurrentUserContext } from 'src/contexts/CurrentUserContext'

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('jwt')
  const { user } = useContext(CurrentUserContext)

  if (!token) {
    return <Navigate to="/signin" replace />
  }

  if (!user) {
    return null
  }

  return children
}
