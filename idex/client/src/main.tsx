import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import ProtectedRoute from './utils/ProtectedRoutes';
import AuthProvider from './utils/AuthProvider';
//import auth from './utils/auth.js'

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';
import Costos from './pages/Costos'
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        //element: auth.loggedIn() ? <Home /> : <LandingPage />,
        element: <LandingPage />,
      }, 
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/perfil',
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        )
      },
      {
        path: '/costos',
        element: (
          <ProtectedRoute>
            <Costos />
          </ProtectedRoute>
        ) 
      },
      {
        path: '/home',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <div style={{ height: "100vh" }}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}
