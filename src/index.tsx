import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
console.log('src/index.tsx module executed');
try {
	const badge = document.createElement('div');
	badge.id = 'module-run-check';
	badge.textContent = 'Module executed';
	badge.style.position = 'fixed';
	badge.style.right = '12px';
	badge.style.top = '12px';
	badge.style.zIndex = '9998';
	badge.style.background = '#f0fff4';
	badge.style.padding = '6px 10px';
	badge.style.border = '1px solid #c6f6d5';
	badge.style.borderRadius = '6px';
	badge.style.color = '#22543d';
	badge.style.fontFamily = 'Inter, Arial, Helvetica, sans-serif';
	document.body.appendChild(badge);
} catch (e) {
	console.error('module DOM append error', e);
}
import Landing from './pages/Landing/Landing';
import './styles/global.css';
import '@fontsource/inter/index.css';
import theme from './theme';

const container = document.getElementById('root');
if (container) {
	container.innerHTML = '<div style="padding:24px;font-family:Inter,Arial,Helvetica,sans-serif">Mounting app...</div>';
}
const root = createRoot(container!);
try {
	// Temporary: render Landing directly to isolate default landing rendering
	root.render(
		<ChakraProvider theme={theme}>
			<Landing />
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
