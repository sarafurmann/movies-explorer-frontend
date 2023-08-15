import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainPage } from 'src/components/MainPage'
import { ErrorPage } from 'src/components/ErrorPage'
import { SignInPage } from 'src/components/SignInPage'
import { SignUpPage } from 'src/components/SignUpPage'
import { ProfilePage } from 'src/components/ProfilePage'
import { MoviesPage } from 'src/components/MoviesPage'

import './index.css'

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
    element: <ProfilePage />,
  },
  {
    path: '/movies',
    element: <MoviesPage />,
  },
  {
    path: '/saved-movies',
    element: <MoviesPage saved />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
