import { styled } from '@mui/material/styles';
import {
	Typography,
	Grid,
	Button,
	CircularProgress
} from '@mui/material';
import {
	Search
} from '@mui/icons-material';
import Logo from 'src/assets/logo';
import { signInWithGoogle } from 'db/auth';
import useAuth from 'hooks/useAuth';
import { signOut } from 'db/auth';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled('header')({
	width: '100%',
	padding: '16px 32px',
	borderBottom: '1px solid #dbdbdb',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '70px'
});

const Item = styled((props: any) => <Grid {...props} item />)({
	display: 'flex',
	alignItems: 'center'
});

const ItemWrapper = styled((props: any) => <Grid container {...props} />)({
	width: 'fit-content'
});

const WidthRestriction = styled('div')({
	maxWidth: '1200px',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between'
});

const Header = () => {
	const { user, loading } = useAuth();
	const navigate = useNavigate();

	const handleSignIn = (): void => {
		signInWithGoogle();
	};

	const handleSignOut = (): void => {
		signOut();
	};

	const toSearch = (): void => {
		navigate('/search');
	};

	return (
		<HeaderWrapper>
			<WidthRestriction>
				<ItemWrapper spacing={2}>
					<Item>
						<Logo />
					</Item>
					<Item>
						<Typography fontSize={19} fontWeight={600}>ROOMBERRY</Typography>
					</Item>
				</ItemWrapper>
				<ItemWrapper spacing={2}>
					<Item>
						{loading
							? (
								<CircularProgress size={30} thickness={4} />
							)
							: user
								? (
									<Grid container spacing={1}>
										<Item>
											<Button
												onClick={toSearch}
												startIcon={<Search />}
												variant="outlined"
											>
												Search
											</Button>
										</Item>
										<Item>
											<Button
												onClick={handleSignOut}
												color="error"
											>Sign Out</Button>
										</Item>
									</Grid>
								)
								: (
									<Button
										variant="contained"
										onClick={handleSignIn}
									>Log In</Button>
								)
						}
					</Item>
				</ItemWrapper>
			</WidthRestriction>
		</HeaderWrapper>
	);
};

export default Header;
