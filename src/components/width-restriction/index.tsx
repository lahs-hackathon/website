import { styled } from '@mui/material/styles';

const WidthRestrictionEl = styled('div')({
	maxWidth: '1200px',
	width: '100%'
});

interface WidthRestrictionProps {
	children: React.ReactNode;
}

const WidthRestriction = ({ children }: WidthRestrictionProps) => {
	return <WidthRestrictionEl>{children}</WidthRestrictionEl>
};

export default WidthRestriction;
