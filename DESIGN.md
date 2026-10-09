# Design context

## Intent
Preserve the supplied Àumbre restaurant frontend while providing editable React pages and matching account screens.

## Visual system
Runtime token owner: src/styles/main.css :root. Forest backgrounds #0d1f16 and #16321f, gold #c9a227 / #e0b93d, cream #f0e6d2. Cinzel display, Cormorant Garamond body, UnifrakturMaguntia ornamental face. Preserve original section structure, photography, spacing and responsive rules.

## Canonical owners
Navbar and Footer provide shared chrome. PageBanner provides page headers. AuthForm owns login/signup field rendering, validation, errors, busy state and password visibility. AuthContext owns temporary account/session state. Auth styling consumes the existing CSS tokens.

## Behavior
English interface. All restaurant pages are public. Account requires an in-memory demo session. Signup and login navigate to account; logout clears session. No credentials or sessions persist through refresh. Forms for contact/reservation retain original local-only confirmation behavior. Auth errors are inline and associated with fields; first invalid field receives focus. Native date and select controls in the original reservation form use platform popup behavior.

## Verification
Production build, formatting check, route and image checks, browser auth flow and narrow-screen checks where browser execution is available. Pixel-perfect parity has not been independently certified.

## Tailwind migration
Tailwind CSS v4 Vite plugin owns utility generation. `styles/tailwind.css` maps existing runtime variables into Tailwind theme aliases without changing color or font values. Restaurant rules use @apply inside the components layer; auth pages use utility classes in JSX. Utilities override component defaults when intentionally added. Original CSS reset replaces Preflight to preserve the reference. Original custom properties, keyframes and backgrounds remain CSS-owned.
