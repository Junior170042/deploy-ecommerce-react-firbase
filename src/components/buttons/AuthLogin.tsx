import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const isAuth0Configured = Boolean(
    import.meta.env.VITE_AUTH0_DOMAIN && import.meta.env.VITE_AUTH0_CLIENT_ID
);

const AuthLogin: React.FC = () => {
    const { loginWithRedirect } = useAuth0();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');
        setIsLoading(true);
        try {
            await loginWithRedirect({ appState: { returnTo: window.location.pathname } });
        } catch (loginError) {
            console.error('Error signing in with Auth0:', loginError);
            setError('No se pudo iniciar sesión. Inténtalo de nuevo.');
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleLogin}
                disabled={isLoading || !isAuth0Configured}
                title={!isAuth0Configured ? 'Configura VITE_AUTH0_DOMAIN y VITE_AUTH0_CLIENT_ID' : undefined}
                className={`flex items-center justify-center space-x-3 px-6 py-2.5 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-100 hover:border-blue-100 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md transform active:scale-95 ${isLoading || !isAuth0Configured ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
                <span>{isLoading ? 'Conectando...' : 'Iniciar sesión'}</span>
            </button>
            {!isAuth0Configured && <p className="mt-1 text-xs text-gray-500">Falta configurar Auth0</p>}
            {error && <p role="alert" className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
};

export default AuthLogin;
