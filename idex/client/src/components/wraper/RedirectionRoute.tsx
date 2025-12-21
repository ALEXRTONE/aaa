// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useAuth } from '../../utils/AuthProvider';
import { Spinner } from 'flowbite-react';

interface RedirectionRouteProps {
    children: ReactNode;
}

export const RedirectionRoute: React.FC<RedirectionRouteProps> = ({ children }) => {

    const { isAuth, isLoading} = useAuth();

    if (isLoading) {
            return (
              <div className="smooth-loader">
                {/* Ejemplo: spinner con animación suave */}
                <Spinner aria-label="Default status example" />;
              </div>
            );
          }

    if (isAuth) {
        return <Navigate to="/home" replace />;
    }


    return children;
};