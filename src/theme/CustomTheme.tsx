import {
	useState,
	useMemo,
	createContext,
	useContext
} from 'react';
import { PaletteMode, ThemeProvider } from '@mui/material';
import Palette from './palette';
import overrides from './compStyleOverride';

interface Props {
	children: React.ReactNode;
}

const CustomTheme = ({ children }: Props) => {
	const theme = useMemo(
		() => Palette(),
		[]
	);
	theme.components = useMemo(
		() => overrides as any,
		[]
	);

	return (
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	)
};

export default CustomTheme;
