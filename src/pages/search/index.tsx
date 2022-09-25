import {
	Grid,
	Autocomplete,
	TextField,
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import WidthRestriction from 'components/width-restriction';
import AuthGuard from 'components/auth-guard';

const Wrapper = styled('div')({
	width: '100%'
});

const InputWrapper = styled('div')({
	padding: '60px 30px',
	width: '100%',
	background: 'rgba(0, 0, 0, 0.1)',
	display: 'flex',
	justifyContent: 'center'
});

const Search = () => {
	const [city, setCity] = useState('');

	const handleChange = (e: any) => {
		setCity(e.currentTarget.value);
	};

	return (
		<AuthGuard>
			<Wrapper>
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
										<Typography variant="h1">Search for roomates in your city</Typography>
									</Grid>
									<Grid item xs={12}>
										{/* <Autocomplete
											options={cityOptions}
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
										/> */}
									</Grid>
								</Grid>
							</WidthRestriction>
						</InputWrapper>
					</Grid>
				</Grid>
			</Wrapper>
		</AuthGuard>
	);
};

export default Search;
