import { createContext } from 'react';
import { auth } from 'db/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContextType } from 'types/auth';

const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true
});

interface AuthProviderProps {
	children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, loading, error] = useAuthState(auth);

	return (
		<AuthContext.Provider
			value={{
				user,
				loading
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
