import { getUserInfo } from 'db/firestore';
import { useState, useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import LoadingPage from 'pages/loading-page';
import { UserData, GenderType, SocialType, ScheduleType, EmploymentStatus } from 'types/user';
import { styled } from '@mui/material/styles';
import {
	Typography,
	Grid,
	TextField,
	Breadcrumbs,
	Link as MuiLink,
	Slider,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	useTheme,
	Button,
} from '@mui/material';
import Card from 'components/card';

const PageWrapper = styled('div')({
	height: '100%',
	width: '100%',
	padding: '30px',
	display: 'flex',
	justifyContent: 'center'
});

const ContentWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	width: '100%',
	alignItems: 'center'
}));

const Link = styled(MuiLink)({
	cursor: 'pointer'
});

const Login = () => {
	const theme = useTheme();
	const [userResponse, setUserResponse] = useState<boolean>(false);
	const { loading } = useAuth();
	const [userInfo, setUserInfo] = useState<UserData | null>(null);
	const [name, setName] = useState<string>('');
	const [age, setAge] = useState<number>(25);
	const [gender, setGender] = useState<GenderType | ''>('');
	const [agePreference, setAgePreference] = useState<number[]>([20, 35]);
	const [maxRent, setMaxRent] = useState<number>(1500);
	const [social, setSocial] = useState<SocialType | ''>('');
	const [scheduleType, setScheduleType] = useState<ScheduleType | ''>('');
	const [employmentStatus, setEmploymentStatus] = useState<EmploymentStatus | ''>('');
	const [isStudent, setIsStudent] = useState<boolean | null>(null);
	const [showingErrors, setShowingErrors] = useState<boolean>(false);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const minDistance = 4;

	useEffect(() => {
		(async (): Promise<void> => {
			const tempUserInfo = await getUserInfo();
			setUserInfo(tempUserInfo);
			setUserResponse(true);
		})();
	}, []);

	const handleAgePreferenceChange = (
		_: Event,
		newValue: number | number[],
		activeThumb: number,
	) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setAgePreference((prev: number[]): number[] => [Math.min(newValue[0], prev[1] - minDistance), prev[1]]);
		} else {
			setAgePreference((prev: number[]): number[] => [prev[0], Math.max(newValue[1], prev[0] + minDistance)]);
		}
	};

	const validProfile = (): boolean => {
		return (
			name !== '' &&
			gender !== '' &&
			social !== '' &&
			scheduleType !== '' &&
			employmentStatus !== '' &&
			isStudent !== null
		);
	};

	const handleSubmitProfile = async (): Promise<void> => {
		setShowingErrors(true);
		if (validProfile()) {
			const person: UserData = {
				name,
				age,
				gender: gender as GenderType,
				agePreference: {
					min: agePreference[0],
					max: agePreference[1]
				},
				maxRent,
				tags: [],
				preferences: [],
				excludes: []
			};
		}
	};

	const handleNextStep = (): void => {
		setCurrentStep((prev: number): number => prev + 1);
	};

	const handlePreviousStep = (): void => {
		setCurrentStep((prev: number): number => prev - 1);
	};

	const steps = [
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Typography variant="h1">
					Enter your information to make an account
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<TextField
							error={showingErrors && name === ''}
							onChange={(e: any) => setName(e.currentTarget.value)}
							value={name}
							size="small"
							label="Name"
							sx={{
								width: '250px'
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={0.5}>
							<Grid item xs={12}>
								<Typography variant="body1">
									Age: {age}
								</Typography>
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
									defaultValue={25}
									valueLabelDisplay="auto"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<Typography>Gender</Typography>
							<RadioGroup onChange={(e: any) => setGender(e.currentTarget.value)}>
								<FormControlLabel value="female" control={<Radio />} label="Female" />
								<FormControlLabel value="male" control={<Radio />} label="Male" />
								<FormControlLabel value="other" control={<Radio />} label="Other" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={0.5}>
							<Grid item xs={12}>
								<Typography variant="body1">Prefered Age Range</Typography>
								<Typography
									variant="body2"
									sx={{ color: theme.palette.text.secondary }}
								>Min: {agePreference[0]}</Typography>
								<Typography
									variant="body2"
									sx={{ color: theme.palette.text.secondary }}
								>Max: {agePreference[1]}</Typography>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Slider
								getAriaLabel={() => 'Minimum distance'}
								value={agePreference}
								onChange={handleAgePreferenceChange}
								valueLabelDisplay="auto"
								disableSwap
								min={18}
								max={85}
								sx={{
									width: '50%'
								}}
							/>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={0.5}>
							<Grid item xs={12}>
								<Typography variant="body1">Maximum Rent Price</Typography>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<TextField
								type="number"
								onChange={(e: any) => setMaxRent(+e.currentTarget.value)}
								size="small"
								value={maxRent}
							/>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Typography variant="h3">Personality Traits</Typography>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Typography variant="body1">Are you more introverted or extroverted?</Typography>
										<FormControl>
											<RadioGroup onChange={(e: any) => setSocial(e.currentTarget.value)}>
												<FormControlLabel value="extroverted" control={<Radio />} label="Extroverted" />
												<FormControlLabel value="introverted" control={<Radio />} label="Introverted" />
											</RadioGroup>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="body1">Are you a morning or evening person?</Typography>
										<FormControl>
											<RadioGroup onChange={(e: any) => setScheduleType(e.currentTarget.value)}>
												<FormControlLabel value="morning" control={<Radio />} label="Morning" />
												<FormControlLabel value="evening" control={<Radio />} label="Evening" />
											</RadioGroup>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="body1">Are you employed or unemployed?</Typography>
										<FormControl>
											<RadioGroup onChange={(e: any) => setEmploymentStatus(e.currentTarget.value)}>
												<FormControlLabel value="employed" control={<Radio />} label="Employed" />
												<FormControlLabel value="unemployed" control={<Radio />} label="Unemployed" />
												<FormControlLabel value="unknown" control={<Radio />} label="Prefer not to say" />
											</RadioGroup>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="body1">Are you a student?</Typography>
										<FormControl>
											<RadioGroup onChange={(e: any) => setIsStudent(e.currentTarget.value)}>
												<FormControlLabel value={true} control={<Radio />} label="Yes" />
												<FormControlLabel value={false} control={<Radio />} label="No" />
											</RadioGroup>
										</FormControl>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>,
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Typography variant="h3">Prefered Roommate Traites</Typography>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="body1">Do you prefer to be with somebody introverted or extroverted?</Typography>
						<FormControl>
							<RadioGroup onChange={(e: any) => setSocial(e.currentTarget.value)}>
								<FormControlLabel value="extroverted" control={<Radio />} label="Extroverted" />
								<FormControlLabel value="introverted" control={<Radio />} label="Introverted" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1">Do you prefer to be with somebody employed or unemployed?</Typography>
						<FormControl>
							<RadioGroup onChange={(e: any) => setEmploymentStatus(e.currentTarget.value)}>
								<FormControlLabel value="employed" control={<Radio />} label="Employed" />
								<FormControlLabel value="unemployed" control={<Radio />} label="Unemployed" />
								<FormControlLabel value="unknown" control={<Radio />} label="Prefer not to say" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1">Do you prefer to be with a student?</Typography>
						<FormControl>
							<RadioGroup onChange={(e: any) => setIsStudent(e.currentTarget.value)}>
								<FormControlLabel value={true} control={<Radio />} label="Yes" />
								<FormControlLabel value={false} control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	];

	return (
		(loading || !userResponse)
			? <LoadingPage />
			: (
				<PageWrapper
					sx={
						userInfo !== null
							? {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							} : {}
					}
				>
					{userInfo === null
						? (
							<ContentWrapper>
								<Breadcrumbs>
									<Link
										href="/"
									>Home</Link>
									<Link>Login</Link>
								</Breadcrumbs>
								<Card sx={{ maxWidth: '600px', width: '100%' }}>
									<Grid container spacing={1}>
										<Grid item xs={12}>
											{steps[currentStep]}
										</Grid>
										<Grid item xs={12}>
											<Grid container spacing={1}>
												<Grid item>
													{currentStep !== 0 && (
														<Button
															variant="outlined"
															onClick={handlePreviousStep}
														>Back</Button>
													)}
												</Grid>
												<Grid item>
													{currentStep === steps.length - 1
														? (
															<Button
																variant="contained"
																onClick={handleSubmitProfile}
															>
																Submit
															</Button>
														)
														: (
															<Button
																variant="outlined"
																onClick={handleNextStep}
															>
																Next
															</Button>
														)
													}
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Card>
							</ContentWrapper>
						)
						: (
							<Typography variant="h1">
								Looks like you already have an account.
								Go To your profile to change your info.
							</Typography>
						)
					}
				</PageWrapper>
			)
	);
};

export default Login;
