import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, createSystem } from '@chakra-ui/react';
import { defaultThemeConfig } from '@chakra-ui/react/theme';
import App from './App';
import './styles/global.css';
import '@fontsource/inter/index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');
const root = createRoot(container!);
const system = createSystem(defaultThemeConfig);
try {
	root.render(
		<ChakraProvider value={system}>
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
