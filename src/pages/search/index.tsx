import {
	Grid,
	Autocomplete,
	TextField,
	Typography,
	Breadcrumbs,
	Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import WidthRestriction from 'components/width-restriction';
import AuthGuard from 'components/auth-guard';
import cities from 'src/data/us/cities';
import { getCities, getUserInfo } from 'db/firestore';
import LoadingPage from '../loading-page';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import Header from 'components/header';
import { RoomType } from 'src/types/city';
import RoomProfile from 'src/components/room-profile';

const Wrapper = styled('div')({
	width: '100%',
	height: '100%'
});

const MessageWrapper = styled('div')({
	width: '100%',
	display: 'flex',
	justifyContent: 'center'
});

const Content = styled('div')({
	padding: '30px',
	display: 'flex',
	justifyContent: 'center',
	maxHeight: '100vh',
	overflowY: 'scroll'
});

const InputWrapper = styled('div')({
	padding: '60px 30px',
	width: '100%',
	background: 'rgba(0, 0, 0, 0.05)',
	display: 'flex',
	justifyContent: 'center'
});

interface AutocompleteLabel {
	label: string;
}

const Search = () => {
	const [usCities, setUsCities] = useState<AutocompleteLabel[]>([]);
	const [userResponse, setUserResponse] = useState<boolean>(false);
	const [city, setCity] = useState('');
	const [dbCities, setDbCities] = useState<Map<string, RoomType[]>>(new Map<string, RoomType[]>());
	const [currentInfo, setCurrentInfo] = useState<RoomType[]>([]);
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		(async (): Promise<void> => {
			if (user) {
				const userInfo = await getUserInfo();
				if (userInfo === null) navigate('/create-profile');
				setUserResponse(true);
				const tempDbCities = await getCities();
				setDbCities(tempDbCities);
				setUsCities(cities
					.filter((item: string) => {
						const cityInfo = tempDbCities.get(item)
						if (cityInfo) return true;
						return false;
					})
					.map((item: string): AutocompleteLabel => ({ label: item }))
				);
			}
		})();
	}, [user]);

	useEffect(() => {
		(async (): Promise<void> => {
			const cityInfo = dbCities.get(city);
			if (cityInfo) {
				setCurrentInfo(cityInfo);
				console.log(cityInfo);
			}
		})();
	}, [city]);

	const handleCityChange = (e: any) => {
		const value = e.currentTarget.value;
		setCity(value);
	};

	const handleAutocompleteChange = (e: any) => {
		setCity(e.target.innerText);
	};

	return (
		<AuthGuard>
			<Wrapper>
				<Header />
				{userResponse
					? (
						<Grid container spacing={3}>
							<Grid
								item
								xs={12}
								sx={{
									display: 'flex',
									alignItem: 'center',
									flexDirection: 'column'
								}}
							>
								<InputWrapper>
									<WidthRestriction>
										<Grid container spacing={2}>
											<Grid item xs={12}>
												<Breadcrumbs>
													<Link href="/">Home</Link>
													<Link sx={{ cursor: 'pointer' }}>Search</Link>
												</Breadcrumbs>
											</Grid>
											<Grid item xs={12}>
												<Typography variant="h1">Search for roomates in your city</Typography>
											</Grid>
											<Grid item xs={12}>
												<Autocomplete
													options={usCities}
													onChange={handleAutocompleteChange}
													renderInput={(params) => (
														<TextField
															{...params}
															label="Search By City"
															onChange={handleCityChange}
															sx={{
																background: 'white',
																borderRadius: '4px !important'
															}}
														/>
													)}
												/>
											</Grid>
										</Grid>
									</WidthRestriction>
								</InputWrapper>
								<Content>
									<WidthRestriction>
										{currentInfo.length > 0
											? (
												<Grid container spacing={4}>
													{currentInfo.map((info: RoomType, index: number) => (
														<Grid
															item
															xs={4}
															key={`room-profile-${index}`}
														>
															<RoomProfile room={info} />
														</Grid>
													))}
												</Grid>
											)
											: (
												<MessageWrapper>
													<Typography variant="h2">Search for cities to see possible roomates</Typography>
												</MessageWrapper>
											)
										}
									</WidthRestriction>
								</Content>
							</Grid>
						</Grid>
					)
					: <LoadingPage />
				}
			</Wrapper>
		</AuthGuard>
	);
};

export default Search;
