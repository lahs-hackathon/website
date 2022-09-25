import { RoomType } from 'types/city';
import Card from 'components/card';
import {
	Grid,
	Typography,
	Button
} from '@mui/material';
import {
	DeleteOutline,
	Edit
} from '@mui/icons-material';
import { deleteRoom } from 'db/firestore';

interface HouseProfileProps {
	room: RoomType;
	id: string;
	deleteLocally: (id: string) => void;
}

const HouseProfile = ({ room, id, deleteLocally }: HouseProfileProps) => {
	console.log(room);

	const handleDeleteRoom = async (): Promise<void> => {
		await deleteRoom(room, id);
		deleteLocally(id);
	};

	const formatProp = (str: string): string => {
		let arr = str.split('');
		arr[0] = arr[0].toUpperCase();
		return arr.join('');
	};

	return (
		<Card>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Typography variant="h2">{room.city}</Typography>
					<Typography variant="body1">
						{room.name}, <a rel="noreferrer noopener" target="_blank" href={`https://google.com/maps/place/${room.address.replace(/\s/g, '+')}`}>{room.address}</a>
					</Typography>
					<Typography variant="body1">Rent: ${room.rentPrice}</Typography>
					<Typography>{room.sqft} ft<sup>2</sup></Typography>
				</Grid>
				<Grid item xs={12}>
					<ul style={{ marginLeft: '-1rem' }}>
						{room.isStudent && (
							<li>Student</li>
						)}
						<li>{formatProp(room.schedule)}</li>
						<li>{formatProp(room.gender)}</li>
						<li>{formatProp(room.social)}</li>
						<li>{room.employed as any === 'true' ? 'Employed' : 'Unemployed'}</li>
					</ul>
				</Grid>
				<Grid item xs={12}>
					<Button
						startIcon={<DeleteOutline />}
						onClick={handleDeleteRoom}
					>Delete</Button>
				</Grid>
			</Grid>
		</Card >
	);
};

export default HouseProfile;
