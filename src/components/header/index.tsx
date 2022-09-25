import { styled } from '@mui/material/styles';
import {
	Typography,
	Grid,
	Button,
	CircularProgress,
	Menu,
	MenuItem,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import {
	Search,
	Person,
	Logout,
	Upload
} from '@mui/icons-material';
import Logo from 'src/assets/logo';
import useAuth from 'hooks/useAuth';
import { signOut } from 'db/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const userMenuOpen = Boolean(anchorEl);

	const handleSignOut = (): void => {
		signOut();
	};

	const toSearch = (): void => {
		navigate('/search');
	};

	const toSignIn = (): void => {
		navigate('/login');
	};

	const toProfile = (): void => {
		navigate('/profile');
	};

	const handleOpenUserMenu = (e: any): void => {
		setAnchorEl(e.currentTarget);
	};

	const closeUserMenu = (): void => {
		setAnchorEl(null);
	};

	const toHome = (): void => {
		navigate('/');
	};

	const toUploadRoom = (): void => {
		navigate('/create-room');
	};

	return (
		<HeaderWrapper>
			<WidthRestriction>
				<ItemWrapper
					spacing={2}
					onClick={toHome}
					sx={{
						cursor: 'pointer'
					}}
				>
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
												onClick={toUploadRoom}
												startIcon={<Upload />}
												variant="outlined"
											>
												Upload Room
											</Button>
										</Item>
										<Item>
											<Button
												sx={{
													padding: 0,
													minWidth: 0,
													borderRadius: 100
												}}
												color="inherit"
												onClick={handleOpenUserMenu}
											>
												<img
													src={user.photoURL}
													alt=""
													referrerPolicy="no-referrer"
													style={{
														height: 36.5,
														width: 36.5,
														borderRadius: 100,
														cursor: 'pointer'
													}}
												/>
											</Button>
											<Menu
												open={userMenuOpen}
												onClose={closeUserMenu}
												anchorEl={anchorEl}
											>
												<MenuItem onClick={toProfile}>
													<ListItemIcon>
														<Person />
													</ListItemIcon>
													<ListItemText>
														Profile
													</ListItemText>
												</MenuItem>
												<MenuItem onClick={handleSignOut}>
													<ListItemIcon>
														<Logout />
													</ListItemIcon>
													<ListItemText>
														Sign out
													</ListItemText>
												</MenuItem>
											</Menu>
										</Item>
									</Grid>
								)
								: (
									<Button
										variant="contained"
										onClick={toSignIn}
									>Get Started</Button>
								)
						}
					</Item>
				</ItemWrapper>
			</WidthRestriction>
		</HeaderWrapper>
	);
};

export default Header;
