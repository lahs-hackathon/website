import { useState, useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from 'db/firestore';
import LoadingPage from 'pages/loading-page';

interface GuardProps {
	children: React.ReactElement | null;
}

const AuthGuard = ({ children }: GuardProps) => {
	const { user, loading } = useAuth();
	const [userInfoResponse, setUserInfoResponse] = useState<boolean>(false);
	// true -> valid
	// false -> invalid
	// null -> loading
	const [validUser, setValidUser] = useState<boolean | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		(async (): Promise<void> => {
			const userInfo = await getUserInfo();
			setValidUser(userInfo !== null);
			setUserInfoResponse(true);
		})();
	}, []);

	useEffect(() => {
		console.log(validUser);
	}, [validUser]);

	useEffect(() => {
		if ((!loading && user === null) || (userInfoResponse === true && validUser === false)) {
			navigate('/login', { replace: true });
		}
	}, [loading, user, navigate, userInfoResponse]);

	return userInfoResponse ? children : <LoadingPage />;
};

export default AuthGuard;