# Àumbre Restaurant — React + Tailwind CSS source

An editable React + Vite + Tailwind CSS v4 project preserving the restaurant clone’s original pages, images and styles, with React Router navigation and new login/signup screens.

## Run locally

Install Node.js 22.12 or newer. Extract this folder, open it in VS Code, and open a terminal:

```bash
npm install
npm run dev
```

Open http://localhost:5173. To create a production build:

```bash
npm run build
npm run preview
```

## Folder structure

```text
restaurant-react/
  public/
    assets/images/          Original restaurant images
    favicon.svg
  src/
    components/             Shared navbar, footer, banners, cards and home sections
    context/AuthContext.jsx Demo account state and authentication service
    data/content.js         Menu, chef, gallery, review, blog and FAQ content
    hooks/usePageTitle.js    Page title hook
    pages/                  Each restaurant page, Login, Signup and Account
    styles/tailwind.css     Tailwind imports, source scanning and theme aliases
    styles/main.css         Reusable Tailwind @apply restaurant components
    styles/auth.css         Shared base and accessibility styles
    App.jsx                 BrowserRouter, Routes and Route definitions
    main.jsx                React entry point
  index.html
  package.json
  package-lock.json
  vite.config.js            Tailwind CSS Vite plugin
  vercel.json               SPA rewrites for direct route visits
  DESIGN.md
```

## Routes

`/`, `/about`, `/menu`, `/chefs`, `/gallery`, `/reservation`, `/testimonials`, `/blog`, `/faq`, `/contact`, `/login`, `/signup`, `/account` and a fallback 404.

The profile icon in the navigation opens login. Login links to signup. Creating an account redirects to the protected account page; log out returns to login.

## Authentication scope

This is a frontend demo, not production authentication. Sign up, log out and log in again in the same tab without refreshing to try the flow. Accounts and sessions exist only in memory and disappear on refresh. Passwords are not written to browser storage; a temporary salted digest is used for demo credential comparison. This digest is not a production password hashing design.

For real users, replace the `signup` and `login` functions in `src/context/AuthContext.jsx` with calls to an authentication backend/provider. The server must validate input, hash passwords with a suitable password hashing algorithm, and manage secure sessions. Client-side account route protection is a UI feature, not server authorization.

Reservation and contact retain the original frontend confirmation behavior; they do not send bookings or messages. Google Fonts requires internet access. Images are included locally. Visual parity with the original has not been certified pixel for pixel.

## Editing

Change menu dishes and other content in `src/data/content.js`. Edit a page in `src/pages/`, home sections in `src/components/`, and colors/typography in the CSS custom properties at the top of `src/styles/main.css`.

## Tailwind CSS

Tailwind CSS v4 is integrated with `@tailwindcss/vite` in `vite.config.js`. No separate Tailwind CLI command or tailwind.config.js is needed. `src/styles/tailwind.css` imports the Tailwind theme/utilities and declares restaurant aliases using `@theme inline`.

Login, signup and account use Tailwind utility classes directly in JSX. The original restaurant selectors and media queries are retained as reusable component rules in `src/styles/main.css`, styled with Tailwind `@apply`. This preserves their responsive cascade. CSS variables, image backgrounds and keyframes remain in CSS where appropriate. The original reset is retained instead of Tailwind Preflight.

Examples of available utilities: `bg-forest`, `bg-forest-deep`, `text-accent`, `text-parchment`, `border-divider`, `font-heading` and `font-restaurant`. Use standard utilities such as `flex`, `grid`, `p-6`, `md:grid-cols-3` and `hover:text-accent` when editing JSX.

Run `npm test` to render each page and check referenced image paths; `npm run check` checks formatting. Browser visual comparisons have not been completed.
