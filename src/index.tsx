import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './styles/global.css';
import '@fontsource/inter/index.css';
import theme from './theme';

const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');
const root = createRoot(container!);
try {
	root.render(
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	);
	console.log('App mounted');
} catch (err) {
	console.error('Render error:', err);
	if (container) {
		const errBox = document.createElement('pre');
		errBox.style.color = 'crimson';
		errBox.style.padding = '16px';
		errBox.textContent = 'Render error: ' + (err instanceof Error ? err.message : String(err));
		container.appendChild(errBox);
	}
}

window.addEventListener('error', (e) => {
	console.error('Uncaught error:', e.error || e.message || e);
});
