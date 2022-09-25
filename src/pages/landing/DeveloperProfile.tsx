import {
	Grid,
	Collapse
} from '@mui/material';
import Card from 'components/card';
import { useState, useRef, useEffect } from 'react';

interface DeveloperProfileProps {
	children: React.ReactNode;
	img: any;
	description: string;
}

const DeveloperProfile = ({ img, children, description }: DeveloperProfileProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const cardRef = useRef(null);
	const centerSx = {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center'
	};

	const size: number = 160;

	useEffect(() => {
		if (cardRef.current !== null) {
			(cardRef.current as any).addEventListener('mouseover', () => {
				setOpen(true);
			});
			(cardRef.current as any).addEventListener('mouseleave', () => {
				setOpen(false);
			});
		}
	}, [cardRef]);

	return (
		<div ref={cardRef}>
			<Card sx={{ width: '170px', cursor: 'pointer' }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sx={centerSx}>
						<img
							src={img}
							alt=""
							style={{
								height: `${size}px`,
								aspectRatio: 3 / 4,
								borderRadius: '10px'
							} as any}
						/>
					</Grid>
					<Grid item xs={12} sx={centerSx}>
						{children}
					</Grid>
					<Grid item xs={12} sx={centerSx}>
						<Collapse in={open}>
							{description}
						</Collapse>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
};

export default DeveloperProfile;
