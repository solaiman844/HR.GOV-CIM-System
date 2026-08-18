import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './styles/global.css';
import '@fontsource/inter/index.css';
import theme from './theme';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
