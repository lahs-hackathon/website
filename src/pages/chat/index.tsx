import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { onSnapshot, doc } from 'firebase/firestore';
import { db, writeMessage } from 'db/firestore';
import useAuth from 'hooks/useAuth';
import Header from 'components/header';

const PageWrapper = styled('div')({
	width: '100%',
	height: '100%'
});

const ChatWrapper = styled('div')({
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column'
});

const ChatBody = styled('div')({
	width: '100%',
	height: 'calc(100% - 125px)'
});

const ChatInputWrapper = styled('div')({
	width: '100%',
	height: '35px',
	paddingLeft: '10px',
	paddingRight: '10px',
});

const Input = styled('input')(({ theme }) => ({
	outine: 'none',
	width: '100%',
	height: '100%',
	border: `1px solid ${theme.palette.text.primary}`,
	transition: '0.15s',
	borderRadius: 100,
	padding: 12,
	'&:focus': {
		borderColor: theme.palette.primary.main
	}
}));

const Chat = () => {
	const location = useLocation();
	const [pathname, setPathname] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [id, setId] = useState<string>('');
	const [messages, setMessages] = useState<string[]>([]);
	const [text, setText] = useState<string>('');
	const { user } = useAuth();

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
		const pname = location.pathname.replace(/^\/chat\//g, '');
		const sections = pname.split('/');
		const tempCity = sections[0];
		const tempId = sections[1];
		setCity(parseToCityName(tempCity));
		setId(tempId);
		setPathname(pname);
	}, [location]);

	useEffect(() => {
		if (user !== null && city !== '' && id !== '') {
			onSnapshot(doc(db, 'chats', city, id, user.uid), (doc) => {
				const data = doc.data();
				if (data && data.messages) {
					const messages = data.messages;
					console.log('messages', messages);
					setMessages(messages);
				}
			});
		}
	}, [city, id, user]);

	const handleSubmit = (e: any): void => {
		e.preventDefault();
		writeMessage(city, id, text);
	};

	const handleChange = (e: any): void => {
		setText(e.currentTarget.value);
	};

	return (
		<PageWrapper>
			<Header />
			<ChatWrapper>
				<ChatBody>
				</ChatBody>
				<ChatInputWrapper>
					<form onSubmit={handleSubmit}>
						<Input
							placeholder="Type a message to chat"
							value={text}
							onChange={handleChange}
						/>
					</form>
				</ChatInputWrapper>
			</ChatWrapper>
		</PageWrapper>
	);
};

export default Chat;
