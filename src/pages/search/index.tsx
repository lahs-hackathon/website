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

const Wrapper = styled('div')({
	width: '100%',
	height: '100%'
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
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		(async (): Promise<void> => {
			if (user) {
				const userInfo = await getUserInfo();
				if (userInfo === null) navigate('/create-profile');
				else setUserResponse(true);
				setUserResponse(true);
				const dbCities = await getCities();
				setUsCities(cities
					.filter((item: string) => dbCities.includes(item.toLowerCase()))
					.map((item: string): AutocompleteLabel => ({ label: item }))
				);
			}
		})();
	}, [user]);

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
									justifyContent: 'center'
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
													renderInput={(params) => (
														<TextField
															{...params}
															label="Search By City"
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
