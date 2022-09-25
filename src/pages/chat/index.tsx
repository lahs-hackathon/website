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
	height: 'calc(100% - 125px)',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	padding: '25px'
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

const ChatBubble = styled('span')({
	padding: '4px 10px',
	background: 'rgba(0, 0, 0, 0.125)',
	borderRadius: 100,
	maxWidth: '50%',
	width: 'fit-content'
});

const Chat = () => {
	const location = useLocation();
	const [pathname, setPathname] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [id, setId] = useState<string>('');
	const [messages, setMessages] = useState<string[]>([]);
	const [text, setText] = useState<string>('');
	const [uid, setUid] = useState<string>('');
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
		if (location.search !== '') {
			const newUid = location.search.split('=')[1];
			setUid(newUid);
		}
		setCity(parseToCityName(tempCity));
		setId(tempId);
		setPathname(pname);
	}, [location]);

	useEffect(() => {
		if (user !== null && city !== '' && id !== '') {
			let userId = uid === '' ? user.uid : uid;
			onSnapshot(doc(db, 'chats', city, id, userId), (doc) => {
				const data = doc.data();
				if (data && data.messages) {
					const messages = data.messages;
					setMessages(messages);
				}
			});
		}
	}, [city, id, user]);

	const handleSubmit = (e: any): void => {
		e.preventDefault();
		if (text !== '') {
			writeMessage(city, id, text);
			setText('');
		}
	};

	const handleChange = (e: any): void => {
		setText(e.currentTarget.value);
	};

	return (
		<PageWrapper>
			<Header />
			<ChatWrapper>
				<ChatBody>
					{messages.map((message: string, index: number) => (
						<ChatBubble key={`msg-${index}`}>
							{message}
						</ChatBubble>
					))}
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
