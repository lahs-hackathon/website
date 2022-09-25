import {
	Grid,
	Typography
} from '@mui/material';
import Header from 'components/header';
import { styled } from '@mui/material/styles';
import WidthRestriction from 'components/width-restriction';

const Item = styled((props: any) => <Grid {...props} item />)({
	display: 'flex',
	justifyContent: 'center'
});

const Title = styled((props: any) => <Typography {...props} variant="h1" />)({
	fontSize: '45px'
});

const LandingWrapper = styled('div')({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column'
});

const Content = styled('div')({
	marginTop: '40px',
	padding: '26px',
});

const Landing = () => {
	return (
		<LandingWrapper>
			<Header />
			<WidthRestriction>
				<Content>
					<Grid
						container
						spacing={4}
						flexWrap="wrap"
					>
						<Item xs={6}>
							<Title>
								Find your perfect roomate
							</Title>
						</Item>
						<Item xs={6}>
							IMG
						</Item>
						<Item />
						<Grid item xs={12}></Grid>
						<Grid item xs={12}></Grid>
						<Grid item xs={12}></Grid>
					</Grid>
				</Content>
			</WidthRestriction>
		</LandingWrapper>
	);
};

export default Landing;
