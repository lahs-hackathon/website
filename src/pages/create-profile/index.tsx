import {
	getUserInfo,
	setUserData
} from 'db/firestore';
import { useState, useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import LoadingPage from 'pages/loading-page';
import {
	UserData,
	GenderType,
	SocialType,
	ScheduleType,
	EmploymentStatus
} from 'types/user';
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
	Button
} from '@mui/material';
import Card from 'components/card';
import { useNavigate } from 'react-router-dom';
import Header from 'components/header';

const PageWrapper = styled('div')({
	height: '100%',
	width: '100%',
	padding: '30px',
	display: 'flex',
	justifyContent: 'center',
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

const DisclaimerWrapper = styled('div')({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	'& > *': {
		maxWidth: '600px',
		width: '100%'
	}
});

interface LoginProps {
	force: boolean;
}

const defaultProps = {
	force: false
};

type LoginPropsType = LoginProps & typeof defaultProps;

const Login = ({ force }: LoginPropsType) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const [userResponse, setUserResponse] = useState<boolean>(false);
	const { user, loading } = useAuth();
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

	const [preferredSocial, setPreferredSocial] = useState<SocialType | ''>('');
	const [preferredScheduleType, setPreferredScheduleType] = useState<ScheduleType | ''>('');
	const [preferredEmploymentStatus, setPreferredEmploymentStatus] = useState<EmploymentStatus | ''>('');
	const [preferredIsStudent, setPreferredIsStudent] = useState<boolean | null>(null);

	const [excludeSocial, setExcludeSocial] = useState<SocialType | ''>('');
	const [excludeScheduleType, setExcludeScheduleType] = useState<ScheduleType | ''>('');
	const [excludeEmploymentStatus, setExcludeEmploymentStatus] = useState<EmploymentStatus | ''>('');
	const [excludeIsStudent, setExcludeIsStudent] = useState<boolean>(false);

	const minDistance = 4;

	useEffect(() => {
		function check(arr: any[], vals: any[]) {
			for (let i = 0; i < vals.length; i++) {
				if (arr.includes(vals[i])) return vals[i];
			}
			return false;
		}

		(async (): Promise<void> => {
			if (!loading) {
				const tempUserInfo = await getUserInfo();
				setUserInfo(tempUserInfo);
				if (tempUserInfo !== null) {
					console.log(tempUserInfo);
					setName(tempUserInfo.name);
					setAge(tempUserInfo.age);
					setGender(tempUserInfo.gender);
					setAgePreference([tempUserInfo.agePreference.min, tempUserInfo.agePreference.max]);
					setMaxRent(tempUserInfo.maxRent);
					const socialTag = check(tempUserInfo.tags, ['extroverted', 'introverted']);
					if (socialTag) {
						setSocial(socialTag);
					}
					const scheduleTag = check(tempUserInfo.tags, ['morning', 'evening']);
					if (scheduleTag) {
						setScheduleType(scheduleTag);
					}
					const employmentTag = check(tempUserInfo.tags, ['employed', 'unemployed', 'unknown']);
					if (employmentTag) {
						setEmploymentStatus(employmentTag);
					}
					const studentTag = check(tempUserInfo.tags, ['student']);
					if (studentTag) {
						setIsStudent(true);
					}
					const preferredSocialTag = check(tempUserInfo.preferences, ['extroverted', 'introverted']);
					if (preferredSocialTag) {
						setPreferredSocial(preferredSocialTag);
					}
					const preferredScheduleTag = check(tempUserInfo.preferences, ['morning', 'evening']);
					if (preferredScheduleTag) {
						setPreferredScheduleType(preferredScheduleTag);
					}
					const preferredEmploymentTag = check(tempUserInfo.preferences, ['employed', 'unemployed', 'unknown']);
					if (preferredEmploymentTag) {
						setPreferredEmploymentStatus(preferredEmploymentTag);
					}
					const preferredStudentTag = check(tempUserInfo.preferences, ['student']);
					if (preferredStudentTag) {
						setPreferredIsStudent(true);
					}
					const excludeSocialTag = check(tempUserInfo.excludes, ['extroverted', 'introverted']);
					if (excludeSocialTag) {
						setExcludeSocial(excludeSocialTag);
					}
					const excludeScheduleTag = check(tempUserInfo.excludes, ['morning', 'evening']);
					if (excludeScheduleTag) {
						setExcludeScheduleType(excludeScheduleTag)
					}
					const excludeEmploymentTag = check(tempUserInfo.excludes, ['employed', 'unemployed', 'unkown']);
					if (excludeEmploymentTag) {
						setExcludeEmploymentStatus(excludeEmploymentTag);
					}
					const excludeStudentTag = check(tempUserInfo.excludes, ['student']);
					if (excludeStudentTag) {
						setExcludeIsStudent(true);
					}
				}
				setUserResponse(true);
			}
		})();
	}, [user]);

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
			gender !== ''
		);
	};

	const handleSubmitProfile = async (): Promise<void> => {
		setShowingErrors(true);
		if (validProfile()) {
			let person: UserData = {
				name,
				age,
				gender: gender as GenderType,
				agePreference: {
					min: agePreference[0],
					max: agePreference[1]
				},
				maxRent,
				tags: [
					social,
					scheduleType,
					employmentStatus
				],
				preferences: [
					preferredSocial,
					preferredScheduleType,
					preferredEmploymentStatus
				],
				excludes: [
					excludeSocial,
					excludeScheduleType,
					excludeEmploymentStatus
				]
			};
			if (isStudent) {
				person.tags.push('student');
			}
			if (preferredIsStudent) {
				person.preferences.push('student');
			}
			if (excludeIsStudent) {
				person.excludes.push('student');
			}
			person.tags = person.tags.filter(item => item !== '');
			person.preferences = person.preferences.filter(item => item !== '');
			person.excludes = person.excludes.filter(item => item !== '');
			await setUserData(person);
			if (!force) {
				navigate('/');
			} else {
				window.location.reload();
			}
		}
	};

	useEffect(() => {
		console.log(preferredIsStudent, typeof preferredIsStudent);
	}, [preferredIsStudent]);

	const handleNextStep = (): void => {
		setCurrentStep((prev: number): number => prev + 1);
	};

	const handlePreviousStep = (): void => {
		setCurrentStep((prev: number): number => prev - 1);
	};

	const toHome = (): void => {
		navigate('/');
	};

	const steps = [
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Typography variant="h1">
					{!force ? 'Enter your information to make an account' : 'Edit your information'}
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
									value={age}
									valueLabelDisplay="auto"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<Typography>Gender</Typography>
							<RadioGroup
								onChange={(e: any) => setGender(e.currentTarget.value)}
								value={gender}
							>
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
										<Typography variant="body1">Are you a morning or evening person?</Typography>
										<FormControl>
											<RadioGroup
												onChange={(e: any) => setScheduleType(e.currentTarget.value)}
												value={scheduleType}
											>
												<FormControlLabel value="morning" control={<Radio />} label="Morning" />
												<FormControlLabel value="evening" control={<Radio />} label="Evening" />
											</RadioGroup>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="body1">Are you employed or unemployed?</Typography>
										<FormControl>
											<RadioGroup
												onChange={(e: any) => setEmploymentStatus(e.currentTarget.value)}
												value={employmentStatus}
											>
												<FormControlLabel value="employed" control={<Radio />} label="Employed" />
												<FormControlLabel value="unemployed" control={<Radio />} label="Unemployed" />
												<FormControlLabel value="unknown" control={<Radio />} label="Prefer not to say" />
											</RadioGroup>
										</FormControl>
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
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>,
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Typography variant="h3">What traits do you prefer</Typography>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="body1">Do you prefer to be with somebody introverted or extroverted?</Typography>
						<FormControl>
							<RadioGroup
								onChange={(e: any) => setPreferredSocial(e.currentTarget.value)}
								value={preferredSocial}
							>
								<FormControlLabel value="extroverted" control={<Radio />} label="Extroverted" />
								<FormControlLabel value="introverted" control={<Radio />} label="Introverted" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1">Do you prefer to room with a morning or evening person?</Typography>
						<FormControl>
							<RadioGroup
								onChange={(e: any) => setPreferredScheduleType(e.currentTarget.value)}
								value={preferredScheduleType}
							>
								<FormControlLabel value="morning" control={<Radio />} label="Morning" />
								<FormControlLabel value="evening" control={<Radio />} label="Evening" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1">Do you prefer to be with somebody employed or unemployed?</Typography>
						<FormControl>
							<RadioGroup
								onChange={(e: any) => setPreferredEmploymentStatus(e.currentTarget.value)}
								value={preferredEmploymentStatus}
							>
								<FormControlLabel value="employed" control={<Radio />} label="Employed" />
								<FormControlLabel value="unemployed" control={<Radio />} label="Unemployed" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1">Do you prefer to be with a student?</Typography>
						<FormControl>
							<RadioGroup
								onChange={(e: any) => setPreferredIsStudent(e.currentTarget.value === 'true' ? true : false)}
								value={preferredIsStudent}
							>
								<FormControlLabel value={true} control={<Radio />} label="Yes" />
								<FormControlLabel value={false} control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>,
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Typography variant="h3">Traits to exclude</Typography>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<FormControl>
							<RadioGroup
								onChange={(e: any) => setExcludeSocial(e.currentTarget.value)}
								value={excludeSocial}
							>
								<FormControlLabel value="extroverted" control={<Radio />} label="Extroverted" />
								<FormControlLabel value="introverted" control={<Radio />} label="Introverted" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<RadioGroup
								onChange={(e: any) => setExcludeScheduleType(e.currentTarget.value)}
								value={excludeScheduleType}
							>
								<FormControlLabel value="morning" control={<Radio />} label="Morning" />
								<FormControlLabel value="evening" control={<Radio />} label="Evening" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<RadioGroup
								onChange={(e: any) => setExcludeEmploymentStatus(e.currentTarget.value)}
								value={excludeEmploymentStatus}
							>
								<FormControlLabel value="employed" control={<Radio />} label="Employed" />
								<FormControlLabel value="unemployed" control={<Radio />} label="Unemployed" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body1">Student</Typography>
						<FormControl>
							<RadioGroup
								onChange={(e: any) => setExcludeIsStudent(e.currentTarget.value)}
								value={excludeIsStudent}
							>
								<FormControlLabel value={true} control={<Radio />} label="Exclude" />
								<FormControlLabel value={false} control={<Radio />} label="Allow" />
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid >
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
					{userInfo === null || force
						? (
							<ContentWrapper>
								{!force && (
									<Breadcrumbs>
										<Link
											href="/"
										>Home</Link>
										<Link>Login</Link>
									</Breadcrumbs>
								)}
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
							<DisclaimerWrapper>
								<div>
									<Grid container spacing={3}>
										<Grid item xs={12}>
											<Typography
												variant="h2"
												sx={{
													textAlign: 'center'
												}}
											>
												Looks like you already have an account.
												Go To your profile to change your info.
											</Typography>
										</Grid>
										<Grid
											item
											xs={12}
											sx={{
												display: 'flex',
												justifyContent: 'center'
											}}
										>
											<Button
												variant="contained"
												onClick={toHome}
											>Back to Home</Button>
										</Grid>
									</Grid>
								</div>
							</DisclaimerWrapper>
						)
					}
				</PageWrapper>
			)
	);
};

Login.defaultProps = defaultProps;

export default Login;
