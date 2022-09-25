import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const PageWrapper = styled('div')(({ theme }) => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	gap: '12px'
}));

const The404Page = () => {
	return (
		<PageWrapper>
			<Typography variant="h1">Whoops. Page not found.</Typography>
			<Typography variant="body1">404 Error! The page you were looking for does not exist, Sorry.</Typography>
		</PageWrapper>
	);
};

export default The404Page;
