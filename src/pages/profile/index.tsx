import {
	Grid,
	Typography,
	Button,
	Collapse,
} from '@mui/material';
import {
	Edit
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Header from 'components/header';
import WidthRestriction from 'components/width-restriction';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthGuard from 'src/components/auth-guard';
import { getUserInfo, getRoomsFromIds } from 'db/firestore';
import { UserData } from 'types/user';
import { RoomType } from 'types/city';
import LoadingPage from '../loading-page';
import Card from 'components/card';
import CreateProfile from 'pages/create-profile';
import HouseProfile from 'src/pages/profile/HouseProfile';

const Content = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	padding: '40px'
})

const PageWrapper = styled('div')({
	width: '100%',
	height: '100%',
	maxHeight: '100vh',
	overflowY: 'scroll'
});

const Profile = () => {
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	const [userResponse, setUserResponse] = useState<boolean>(false);
	const [info, setInfo] = useState<UserData | null>(null);
	const [editing, setEditing] = useState<boolean>(false);
	const [rooms, setRooms] = useState<RoomType[]>([]);

	useEffect(() => {
		(async (): Promise<void> => {
			if (user) {
				const userInfo = await getUserInfo();
				if (userInfo !== null) {
					if (userInfo.roomIds) {
						const tempRooms: RoomType[] = await getRoomsFromIds(userInfo.roomIds);
						setRooms(tempRooms);
					}
					setInfo(userInfo);
					setUserResponse(true);
				} else {
					navigate('/create-profile');
				}
			}
		})();
	}, [user]);

	const toggleEditing = (): void => {
		setEditing((prev: boolean): boolean => !prev);
	};

	const handleDeleteLocally = (id: string): void => {
		setRooms((rooms: RoomType[]): RoomType[] => {
			let copy = [...rooms];
			copy = copy.filter((item: RoomType): boolean => item.id !== id);
			return copy;
		});
	};

	const stopEditing = (): void => {
		setEditing(false);
	};

	return (
		<AuthGuard>
			<PageWrapper>
				<Header />
				<Content>
					{(loading || !userResponse || info === null)
						? <LoadingPage />
						: (
							<WidthRestriction>
								<Grid container spacing={4}>
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
												<Typography variant="h1">
													{info.name}
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<Typography variant="body2">
													{info.age}, {info.gender}
												</Typography>
											</Grid>
										</Grid>
									</Grid>
									<Grid
										item
										xs
										sx={{
											display: 'flex',
											justifyContent: 'flex-end',
											alignItems: 'flex-start'
										}}
									>
										{!editing
											? (
												<Button
													endIcon={<Edit />}
													onClick={toggleEditing}
												>Edit</Button>
											)
											: (
												<Button
													onClick={stopEditing}
													color="inherit"
												>Cancel</Button>
											)
										}
									</Grid>
									<Grid item xs={12}>
										<Collapse in={!editing}>
											<Grid container spacing={3}>
												<Grid item xs={4}>
													<Card stretch>
														<Grid container spacing={1}>
															<Grid item xs={12}>
																<Typography variant="h2">
																	Personality Traits
																</Typography>
															</Grid>
															<Grid item xs={12}>
																<ul style={{ paddingLeft: '-1rem' }}>
																	{info.tags.map((tag: string | null, index: number) => (
																		<li key={`trait-${index}`}>
																			<Typography variant="h4">{tag}</Typography>
																		</li>
																	))}
																</ul>
															</Grid>
														</Grid>
													</Card>
												</Grid>
												<Grid item xs={4}>
													<Card stretch>
														<Grid container spacing={1}>
															<Grid item xs={12}>
																<Typography variant="h2">
																	Prefered Traits
																</Typography>
															</Grid>
															<Grid item xs={12}>
																<ul style={{ paddingLeft: '-1rem' }}>
																	{info.preferences.map((tag: string | null, index: number) => (
																		<li key={`trait-${index}`}>
																			<Typography variant="h4">{tag}</Typography>
																		</li>
																	))}
																</ul>
															</Grid>
														</Grid>
													</Card>
												</Grid>
												<Grid item xs={4}>
													<Card stretch>
														<Grid container spacing={1}>
															<Grid item xs={12}>
																<Typography variant="h2">
																	Excluded Traits
																</Typography>
															</Grid>
															<Grid item xs={12}>
																<ul style={{ paddingLeft: '-1rem' }}>
																	{info.preferences.map((tag: string | null, index: number) => (
																		<li key={`trait-${index}`}>
																			<Typography variant="h4">{tag}</Typography>
																		</li>
																	))}
																</ul>
															</Grid>
														</Grid>
													</Card>
												</Grid>
											</Grid>
										</Collapse>
									</Grid>
									<Grid item xs={12}>
										<Collapse in={!editing}>
											{rooms.length > 0 && (
												<Grid container spacing={2}>
													<Grid item xs={12}>
														<Typography variant="h1">
															Your rooms
														</Typography>
													</Grid>
													<Grid item xs={12}>
														<Grid container spacing={4}>
															{rooms.map((room: RoomType, index: number) => (
																<Grid
																	item
																	key={`room-profile-${index}`}
																	xs={6}
																>
																	<HouseProfile
																		id={room!.id as string}
																		room={room}
																		deleteLocally={handleDeleteLocally}
																	/>
																</Grid>
															))}
														</Grid>
													</Grid>
												</Grid>
											)}
										</Collapse>
									</Grid>
									<Grid item xs={12}>
										<Collapse in={editing}>
											<CreateProfile force />
										</Collapse>
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
