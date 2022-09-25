import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';

const Wrapper = styled('div')({
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});

const LoadingPage = () => {
	return (
		<Wrapper>
			<CircularProgress />
		</Wrapper>
	);
};

export default LoadingPage;
