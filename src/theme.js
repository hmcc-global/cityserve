import { extendTheme } from '@chakra-ui/react';
import '@fontsource/antonio';
import '@fontsource/manrope';

const theme = extendTheme({
	fonts: {
		heading: `'Antonio', sans-serif`,
		body: `'Manrope', sans-serif`,
	},
});

export default theme;
