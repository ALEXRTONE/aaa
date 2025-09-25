import { createContext, type PropsWithChildren, useContext, useState } from 'react';
import auth from '../utils/auth.js'

interface Token {
    token: string
}

const AuthContext = createContext<Token | null>(null);

type AuthProviderProps = PropsWithChildren

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  // Uses `isSignedIn` prop to determine whether or not to render a user

  const isSignedIn = auth.loggedIn()

  const [token] = useState<Token | null>(isSignedIn ? { token: auth.getToken() } : null);

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};