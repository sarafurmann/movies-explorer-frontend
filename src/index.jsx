import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { CurrentUserContext } from 'src/contexts/CurrentUserContext'

import { MainPage } from 'src/components/MainPage'
import { ErrorPage } from 'src/components/ErrorPage'
import { SignInPage } from 'src/components/SignInPage'
import { SignUpPage } from 'src/components/SignUpPage'
import { ProfilePage } from 'src/components/ProfilePage'
import { MoviesPage } from 'src/components/MoviesPage'
import { ProtectedRoute } from 'src/components/ProtectedRoute'

import './index.css'
import { mainApi } from './utils/MainApi'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/movies',
    element: (
      <ProtectedRoute>
        <MoviesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/saved-movies',
    element: (
      <ProtectedRoute>
        <MoviesPage saved />
      </ProtectedRoute>
    ),
  },
])

const App = () => {
  const [user, setUser] = useState(null)
  const [myMovies, setMyMovies] = useState([])

  useEffect(() => {
    Promise.all([
      mainApi.me().catch(() => ({ data: null })),
      mainApi.getMovies().catch(() => ({ data: [] })),
    ]).then(([{ data: user }, { data: movies }]) => {
      setUser(user)
      setMyMovies(movies)
    })
  }, [])

  return (
    <CurrentUserContext.Provider
      value={{ user, myMovies, setUser, setMyMovies }}
    >
      <RouterProvider router={router} />
    </CurrentUserContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
