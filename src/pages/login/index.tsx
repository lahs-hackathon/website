import {
	Typography,
	Button,
	Grid,
	Link as MuiLink
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from 'components/card';
import { signInWithGoogle } from 'db/auth';
import { useNavigate } from 'react-router-dom';

const PageWrapper = styled('div')({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	padding: '45px'
});

const SignInButton = styled(Button)({
	width: '100%',
	padding: '10px',
	textTransform: 'none',
	fontSize: 18,
	border: '1px solid #00000016',
	borderRadius: 6
});

const Link = styled(MuiLink)({
	textDecoration: 'none'
});

const Login = () => {
	const navigate = useNavigate();

	const handleSignIn = async (): Promise<void> => {
		await signInWithGoogle();
		navigate('/');
	};

	return (
		<PageWrapper>
			<Card sx={{ maxWidth: '600px', width: '100%' }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Grid container spacing={3.5}>
							<Grid item xs={12}>
								<Typography variant="h2">Sign in with Google</Typography>
							</Grid>
							<Grid item xs={12}>
								<SignInButton onClick={handleSignIn}>Sign In With Google</SignInButton>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Link href="/">Home</Link>
					</Grid>
				</Grid>
			</Card>
		</PageWrapper>
	);
};

export default Login;
