import { RouteType } from 'types/utils';
import The404Page from 'pages/404';
import Landing from 'pages/landing';
import Search from 'pages/search';
import CreateProfile from 'pages/create-profile';
import Login from 'pages/login';
import Profile from 'pages/profile';
import CreateRoom from 'pages/create-room';
import Chat from 'pages/chat';

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
		path: '/create-profile',
		element: <CreateProfile />
	},
	{
		path: '/profile',
		element: <Profile />
	},
	{
		path: '/create-room',
		element: <CreateRoom />
	},
	{
		path: '/chat/:city/:id',
		element: <Chat />
	},
	{
		path: '*',
		element: <The404Page />
	}
];

export default routes;
