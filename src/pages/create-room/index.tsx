import {
	Grid,
	Typography,
	Autocomplete,
	TextField,
	Slider,
	FormControlLabel,
	FormControl,
	RadioGroup,
	Radio,
	Button
} from '@mui/material';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Header from 'components/header';
import WidthRestriction from 'components/width-restriction';
import Card from 'components/card';
import usCities from 'src/data/us/cities';
import { EmploymentStatus, GenderType, ScheduleType, SocialType } from 'types/user';
import { RoomType } from 'types/city';
import { addRoom, getUserInfo } from 'db/firestore';
import { useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import AuthGuard from 'components/auth-guard';
import LoadingPage from '../loading-page';

const PageWrapper = styled('div')({
	width: '100%',
	height: '100%',
	maxHeight: '100vh',
	overflowY: 'scroll'
});

const Content = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	padding: '30px'
});

interface AutocompleteLabel {
	label: string;
}

const CreateRoom = () => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const [cities, setCities] = useState<AutocompleteLabel[]>([]);
	const [inputCity, setInputCity] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const [age, setAge] = useState<number>(20);
	const [isStudent, setIsStudent] = useState<boolean>(false);
	const [employed, setEmployed] = useState<EmploymentStatus | ''>('');
	const [social, setSocial] = useState<SocialType | ''>('');
	const [gender, setGender] = useState<GenderType | ''>('');
	const [schedule, setSchedule] = useState<ScheduleType | ''>('');
	const [sqft, setSqft] = useState<number>(1500);
	const [address, setAddress] = useState<string>('');
	const [userResponse, setUserResponse] = useState<boolean>(false);

	useEffect(() => {
		setCities(usCities.map((item: string): AutocompleteLabel => ({ label: item })));
	}, []);

	const handleCityChange = (e: any): void => {
		setInputCity(e.currentTarget.value);
	};

	const handleNameChange = (e: any): void => {
		setName(e.currentTarget.value);
	};

	const handleSetPrice = (e: any): void => {
		setPrice(+e.currentTarget.value);
	};

	const handleSqftChange = (e: any): void => {
		setSqft(e.currentTarget.value);
	};

	const validRoom = (): boolean => {
		return (
			usCities.includes(inputCity) &&
			social !== '' &&
			gender !== '' &&
			schedule !== '' &&
			employed !== '' &&
			address !== ''
		);
	};

	const submitRoom = async (): Promise<void> => {
		if (validRoom()) {
			const room: RoomType = {
				city: inputCity,
				name,
				rentPrice: price,
				age: age,
				isStudent,
				employed: employed as EmploymentStatus,
				social: social as SocialType,
				gender: gender as GenderType,
				sqft,
				schedule: schedule as ScheduleType,
				uid: user.uid,
				address
			};
			await addRoom(room);
			navigate('/profile');
		}
	};

	const handleAutoCompleteCity = (e: any) => {
		setInputCity(e.target.innerText);
	};

	const handleChangeAddress = (e: any): void => {
		setAddress(e.currentTarget.value);
	};

	useEffect(() => {
		(async (): Promise<void> => {
			if (user !== null) {
				const userInfo = await getUserInfo();
				if (userInfo === null) navigate('/create-profile');
				setUserResponse(true);
			}
		})();
	}, [user]);

	return (
		<AuthGuard>
			{userResponse
				? (
					<PageWrapper>
						<Header />
						<Content>
							<WidthRestriction amount={600}>
								<Card>
									<Grid container spacing={4}>
										<Grid item xs={12}>
											<Typography variant="h1">
												Enter Your Home Information
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Typography variant="body1">Select your city</Typography>
												</Grid>
												<Grid item xs={12}>
													<Autocomplete
														options={cities}
														onChange={handleAutoCompleteCity}
														value={{ label: inputCity }}
														renderInput={(params) => (
															<TextField
																{...params}
																label="Select your city"
																onChange={handleCityChange}
																value={inputCity}
																sx={{
																	background: 'white',
																	borderRadius: '4px !important'
																}}
															/>
														)}
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Typography variant="body1">Enter the address</Typography>
												</Grid>
												<Grid item xs={12}>
													<TextField
														fullWidth
														size="small"
														onChange={handleChangeAddress}
														label="Address"
														value={address}
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Typography variant="body1">Enter your house's name (optional)</Typography>
												</Grid>
												<Grid item xs={12}>
													<TextField
														size="small"
														onChange={handleNameChange}
														label="Name (optional)"
														value={name}
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Typography variant="body1">Enter house rent</Typography>
												</Grid>
												<Grid item xs={12}>
													<TextField
														type="number"
														onChange={handleSetPrice}
														label="Rent price"
														size="small"
														value={price}
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Typography variant="body1">Your age: {age}</Typography>
												</Grid>
												<Grid item xs={12}>
													<Slider
														min={18}
														max={85}
														sx={{
															width: '50%'
														}}
														step={1}
														onChange={(_, newVal: number | number[]) => setAge(Array.isArray(newVal) ? newVal[0] : newVal)}
														value={age}
														valueLabelDisplay="auto"
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="body1">Are you a student?</Typography>
											<FormControl>
												<RadioGroup
													onChange={(e: any) => setIsStudent(e.currentTarget.value)}
													value={isStudent}
												>
													<FormControlLabel value={true} control={<Radio />} label="Yes" />
													<FormControlLabel value={false} control={<Radio />} label="No" />
												</RadioGroup>
											</FormControl>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="body1">What is your employment status?</Typography>
											<FormControl>
												<RadioGroup
													onChange={(e: any) => setEmployed(e.currentTarget.value)}
													value={employed}
												>
													<FormControlLabel value="employed" control={<Radio />} label="Employed" />
													<FormControlLabel value="unemployed" control={<Radio />} label="Unemployed" />
												</RadioGroup>
											</FormControl>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="body1">Are you introverted or extroverted?</Typography>
											<FormControl>
												<RadioGroup
													onChange={(e: any) => setSocial(e.currentTarget.value)}
													value={social}
												>
													<FormControlLabel value="extroverted" control={<Radio />} label="Extroverted" />
													<FormControlLabel value="introverted" control={<Radio />} label="Introverted" />
												</RadioGroup>
											</FormControl>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="body1">Gender</Typography>
											<FormControl>
												<RadioGroup
													onChange={(e: any) => setGender(e.currentTarget.value)}
													value={gender}
												>
													<FormControlLabel value="male" control={<Radio />} label="Male" />
													<FormControlLabel value="female" control={<Radio />} label="Female" />
													<FormControlLabel value="other" control={<Radio />} label="Other" />
												</RadioGroup>
											</FormControl>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="body1">Are you a morning or evening person?</Typography>
											<FormControl>
												<RadioGroup
													onChange={(e: any) => setSchedule(e.currentTarget.value)}
													value={schedule}
												>
													<FormControlLabel value="morning" control={<Radio />} label="Morning" />
													<FormControlLabel value="evening" control={<Radio />} label="Evening" />
												</RadioGroup>
											</FormControl>
										</Grid>
										<Grid item xs={12}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Typography variant="body1">How many sqft is your house approximatly?</Typography>
												</Grid>
												<Grid item xs={12}>
													<TextField
														type="number"
														onChange={handleSqftChange}
														value={sqft}
														size="small"
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Button
												variant="contained"
												onClick={submitRoom}
											>
												Submit
											</Button>
										</Grid>
									</Grid>
								</Card>
							</WidthRestriction>
						</Content>
					</PageWrapper>
				)
				: <LoadingPage />
			}
		</AuthGuard>
	)
};

export default CreateRoom;
