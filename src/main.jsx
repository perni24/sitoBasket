import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Admin from './pages/admin.jsx'
import Squadre from './pages/squadre.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />  
      },
      {
        path: 'squadre',
        element: <Squadre /> 
      },
      {
        path: 'login',
        element: <Login /> 
      },
      {
        path: 'admin',
        element : <Admin />
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)