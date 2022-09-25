import { styled } from '@mui/material/styles';

const WidthRestrictionEl = styled((props: any) => <div {...props} />, {
	shouldForwardProp: (prop: string): boolean => true,
})(({ amount }) => ({
	maxWidth: `${amount}px`,
	width: '100%'
}));

interface WidthRestrictionProps {
	children: React.ReactNode;
	amount: number;
}

const defaultProps = {
	amount: 1200
};

type WidthRestrictionPropsType = WidthRestrictionProps & typeof defaultProps;

const WidthRestriction = ({ children, amount }: WidthRestrictionPropsType) => {
	return <WidthRestrictionEl amount={amount}>{children}</WidthRestrictionEl>
};

WidthRestriction.defaultProps = defaultProps;

export default WidthRestriction;
