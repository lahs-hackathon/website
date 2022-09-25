import { styled } from '@mui/material/styles';
import {
	Card as MuiCard,
	SxProps
} from '@mui/material';

const CardEl = styled(MuiCard)({
	boxShadow: 'rgb(0 0 0 / 12%) 0px 8px 32px',
	borderRadius: '8px',
	padding: '24px',
	overflowY: 'scroll'
});

interface CardProps {
	children: React.ReactNode;
	sx: SxProps;
}

const defaultProps = {
	sx: {}
};

type CardPropsType = CardProps & typeof defaultProps;

const Card = ({ children, sx }: CardPropsType) => {
	return (
		<CardEl sx={sx}>
			{children}
		</CardEl>
	)
};

Card.defaultProps = defaultProps;

export default Card;
