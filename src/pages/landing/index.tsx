import {
	Grid,
	Typography
} from '@mui/material';
import Header from 'components/header';
import { styled } from '@mui/material/styles';
import WidthRestriction from 'components/width-restriction';
import Logo from 'assets/logo';
import DeveloperProfile from './DeveloperProfile';
import JacksonOtto from 'assets/JacksonOtto.jpg';
import LucaPaliska from 'assets/LucaPaliska.jpg';
import RileyTang from 'assets/RileyTang.jpg';
import BenXu from 'assets/BenXu.jpg';

const Title = styled((props: any) => <Typography {...props} variant="h1" />)({
	fontSize: '45px'
});

const LandingWrapper = styled('div')({
	width: '100%',
	maxHeight: '100vh',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	overflowY: 'scroll'
});

const Content = styled('div')({
	marginTop: '40px',
	padding: '26px',
});

const developers = [
	{
		name: 'Jackson Otto',
		img: JacksonOtto,
		description: "Team Lead"
	},
	{
		name: "Luca Paliska",
		img: LucaPaliska,
		description: "Junior Developer"
	},
	{
		name: "Ben Xu",
		img: BenXu,
		description: "Junior Developer"
	},
	{
		name: "Riley Tang",
		img: RileyTang,
		description: "Junior Developer"
	}
]

const Landing = () => {
	return (
		<LandingWrapper>
			<Header />
			<WidthRestriction>
				<Content>
					<Grid
						container
						spacing={12}
					>
						<Grid
							item
							xs={6}
							sx={{
								display: 'flex',
								alignItems: 'center'
							}}
						>
							<Title>
								Find your perfect roomate
							</Title>
						</Grid>
						<Grid
							item
							xs={6}
							sx={{
								display: 'flex',
								justifyContent: 'flex-end'
							}}
						>
							<Logo size={280} />
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography variant="h1">Who are we?</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="h4">We are Roomberry. Our goal is to make finding your perfect roommate a piece of cake! Through our advanced algorithms, we are able to match your preferences to other people's personalities in order to give you the best rooming experience.</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography variant="h1">Our team</Typography>
								</Grid>
								<Grid
									item
									xs={12}
									sx={{
										display: 'flex',
										justifyContent: 'flex-start',
									}}
								>
									<Grid
										container
										spacing={6}
										sx={{
											display: 'flex',
											justifyContent: 'center'
										}}
									>
										{developers.map((developer, index: number) => (
											<Grid
												item
												key={`developer-${index}`}
											>
												<DeveloperProfile
													img={developer.img}
													description={developer.description}
												>
													{developer.name}
												</DeveloperProfile>
											</Grid>
										))}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Content>
			</WidthRestriction>
		</LandingWrapper>
	);
};

export default Landing;
