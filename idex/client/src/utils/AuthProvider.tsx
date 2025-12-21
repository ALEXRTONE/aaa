import { createContext, type PropsWithChildren, useContext, useState } from 'react';
//import auth from '../utils/auth.js'
import { useEffect } from 'react';
import { auth_user } from '../api/auth_user.js';

// interface Token {
//     token: string
// }

interface AuthContextType {
    isAuth: boolean; // Cambia `{}` por `boolean` si `isAuth` es un valor booleano
    setIsAuth: (value: boolean) => void; // Tipo de la función para actualizar el estado
    isLoading: boolean; // Cambia `{}` por `boolean` si `isAuth` es un valor booleano
    setIsLoading: (value: boolean) => void; // Tipo de la función para actualizar el estado

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = PropsWithChildren

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true); // Inicialmente en "carga" 

  useEffect(() => {
        const checkAuth = async () => {
            // ⏳ Retraso artificial de 1 segundo (ajustable)
            setIsAuth(await auth_user());
            setIsLoading(false); // Finaliza la carga
        };
        checkAuth();
    }, []);

  return <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading, setIsLoading }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log('es context: ',context)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};