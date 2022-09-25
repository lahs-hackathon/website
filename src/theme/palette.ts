import { PaletteMode, createTheme } from "@mui/material";

const Palette = () => {
	return createTheme({
		palette: {
			primary: {
				main: '#f2615b',
			}
		},
		typography: {
			h1: {
				fontSize: 32,
  			fontWeight: 400
			},
			h2: {
				fontSize: 26,
  			fontWeight: 400
			},
			h3: {
				fontSize: 22,
  			fontWeight: 400
			},
			h4: {
				fontSize: 18,
				fontWeight: 400
			},
			h5: {
				fontSize: 12.8,
				fontWeight: 400
			},
			h6: {
				fontSize: 11.2,
				fontWeight: 400
			}
		}
	} as any);
};

export default Palette;
