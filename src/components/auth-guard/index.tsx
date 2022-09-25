import { useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import LoadingPage from 'pages/loading-page';

interface AuthGuardProps {
	children: React.ReactElement | null;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
	const { user, loading } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!loading && user === null) {
			navigate('/login', { replace: true });
		}
	}, [loading, user, navigate]);

	return loading ? <LoadingPage /> : children;
};

export default AuthGuard;
