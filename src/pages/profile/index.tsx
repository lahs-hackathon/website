import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from 'components/header';
import WidthRestriction from 'components/width-restriction';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthGuard from 'src/components/auth-guard';
import { getUserInfo } from 'src/db/firestore';
import { UserData } from 'types/user';
import LoadingPage from '../loading-page';


const Content = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	padding: '40px'
})

const PageWrapper = styled('div')({
	width: '100%',
	height: '100%'
});

const Profile = () => {
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	const [userResponse, setUserResponse] = useState<boolean>(false);
	const [info, setInfo] = useState<UserData | null>(null);

	useEffect(() => {
		(async (): Promise<void> => {
			if (user) {
				const userInfo = await getUserInfo();
				if (userInfo !== null) {
					setInfo(userInfo);
					setUserResponse(true);
				} else {
					navigate('/create-profile');
				}
			}
		})();
	}, [user]);

	return (
		<AuthGuard>
			<PageWrapper>
				<Header />
				<Content>
					{(loading || !userResponse)
						? <LoadingPage />
						: (
							<WidthRestriction>
								<Grid container spacing={2}>
									<Grid item>
										<img
											src={user.photoURL}
											referrerPolicy="no-referrer"
											style={{
												width: 120,
												height: 120,
												borderRadius: 100
											}}
										/>
									</Grid>
									<Grid item xs>
										<Grid container spacing={1}>
											<Grid item xs={12}>
												<Typography variant="h2">
													{user.displayName}
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</WidthRestriction>
						)
					}
				</Content>
			</PageWrapper>
		</AuthGuard>
	);
};

export default Profile;
