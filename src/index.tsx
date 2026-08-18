import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './styles/global.css';
import '@fontsource/inter/index.css';
import theme from './theme';

const container = document.getElementById('root');
if (container) {
	container.innerHTML = '<div style="padding:24px;font-family:Inter,Arial,Helvetica,sans-serif">Mounting app...</div>';
}
const root = createRoot(container!);
root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
console.log('App mounted');
