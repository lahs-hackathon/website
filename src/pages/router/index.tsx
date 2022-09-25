import { styled } from '@mui/material/styles';
import routes from './routes';
import { Routes, Route } from 'react-router-dom';
import { RouteType } from 'types/utils';

const RouterWrapper = styled('main')(({ theme }) => ({
	height: '100vh',
	width: '100vw',
	background: theme.palette.background.paper,
}));

const Router = () => {
	return (
		<RouterWrapper>
			<Routes>
				{routes.map((route: RouteType, index: number) => (
					<Route path={route.path} element={route.element} key={`route-${index}`} />
				))}
			</Routes>
		</RouterWrapper>
	);
};

export default Router;
