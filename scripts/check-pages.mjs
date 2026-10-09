import { createServer } from 'vite';
import { existsSync } from 'node:fs';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
 const { renderToString } = await import('react-dom/server');
 const { createElement } = await import('react');
 const { MemoryRouter } = await import('react-router-dom');
 const { AuthProvider } = await server.ssrLoadModule('/src/context/AuthContext.jsx');
 for (const name of ['Home','About','Menu','Chefs','Gallery','Reservation','Testimonials','Blog','FAQ','Contact','NotFound','Login','Signup']) {
  const { default: Page } = await server.ssrLoadModule(`/src/pages/${name}.jsx`);
  const html = renderToString(createElement(MemoryRouter, null, createElement(AuthProvider, null, createElement(Page))));
  if (!html.length) throw new Error(`${name} rendered no content`);
  for (const match of html.matchAll(/src="(\/assets\/[^" ]+)"/g)) {
   if (!existsSync('public'+match[1])) throw new Error(`Missing image: ${match[1]}`);
  }
  console.log(`${name}: rendered; image paths valid`);
 }
} finally { await server.close(); }
