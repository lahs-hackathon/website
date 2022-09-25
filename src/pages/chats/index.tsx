import { styled } from '@mui/material/styles';
import {
	Typography,
	Grid,
	Button
} from '@mui/material';
import Header from 'components/header';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from 'src/hooks/useAuth';
import { getRoomChats } from 'db/firestore';
import { ChatIdType } from 'src/types/chat';
import WidthRestriction from 'src/components/width-restriction';
import {
	Launch
} from '@mui/icons-material';
import Card from 'components/card';
import { useNavigate } from 'react-router-dom';
import { UserData } from 'src/types/user';
import LoadingPage from '../loading-page';

const PageWrapper = styled('div')({
	width: '100%',
	height: '100%'
});

const Content = styled('div')({
	padding: '30px',
	display: 'flex',
	justifyContent: 'center'
});

const Chats = () => {
	const location = useLocation();
	const [city, setCity] = useState<string>('');
	const [id, setId] = useState<string>('');
	const [pathname, setPathname] = useState<string>('');
	const { user } = useAuth();
	const [chats, setChats] = useState<UserData[]>([]);
	const [chatResponse, setChatResponse] = useState<boolean>(false);
	const navigate = useNavigate();

	const parseToCityName = (name: string): string => {
		const arr: string[] = name.split('');
		let newArr: string[] = [arr[0]];
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] === arr[i].toUpperCase()) {
				newArr.push(' ');
			}
			newArr.push(arr[i]);
		}
		return newArr.join('');
	};

	useEffect(() => {
		const pname = location.pathname.replace(/^\/chats\//g, '');
		const sections = pname.split('/');
		const tempCity = sections[0];
		const tempId = sections[1];
		setCity(parseToCityName(tempCity));
		setId(tempId);
		setPathname(pname);
	}, [location]);

	useEffect(() => {
		if (user !== null && city !== '' && id !== '') {
			(async (): Promise<void> => {
				let chats = await getRoomChats(city, id);
				setChats(chats);
				setChatResponse(true);
			})();
		}
	}, [city, id, user]);

	const handleOpenChat = (chat: UserData) => {
		navigate(`/chat/${city.replace(/\s/g, '')}/${id}?id=${chat.uid}`);
	};

	return (
		<PageWrapper>
			<Header />
			<Content>
				{chatResponse
					? chats.length > 0
						? (
							<WidthRestriction>
								<Grid container spacing={4}>
									{chats.map((chat: UserData, index: number) => (
										<Grid
											item
											key={`chat-${index}`}
										>
											<Card>
												<Grid container spacing={1}>
													<Grid item xs={12}>
														<Typography variant="h2">
															{chat.name}
														</Typography>
														<Typography variant="body1">
															{chat.age}, {chat.gender}
														</Typography>
													</Grid>
													<Grid item xs={12}>
														<Button
															variant="outlined"
															onClick={() => handleOpenChat(chat)}
															startIcon={<Launch />}
														>
															Open Chat
														</Button>
													</Grid>
												</Grid>
											</Card>
										</Grid>
									))}
								</Grid>
							</WidthRestriction>
						)
						: <Typography variant="h2">No Chats Found</Typography>
					: <LoadingPage />
				}
			</Content>
		</PageWrapper >
	);
};

export default Chats;
