// providers/CombinedProviders.tsx
import type { ReactNode } from 'react';
import AuthProvider from './AuthProvider';


export const CombinedProviders = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};