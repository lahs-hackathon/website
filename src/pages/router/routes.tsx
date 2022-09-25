import { RouteType } from 'types/utils';
import The404Page from 'pages/404';
import Landing from 'pages/landing';
import Search from 'pages/search';
import Login from 'pages/login';

const routes: RouteType[] = [
	{
		path: '/',
		element: <Landing />
	},
	{
		path: '/search',
		element: <Search />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '*',
		element: <The404Page />
	}
];

export default routes;
