# Nibir Kalita — Portfolio

A responsive, single-page personal portfolio built with React and Vite. The visual direction adapts the reference site’s dark editorial design, large display type, bordered sections, rounded cards, and pill buttons to Nibir’s own student, developer, designer, and maker portfolio.

## Run locally

- `npm install`
- `npm run dev`
- `npm run build` for a production build
- `npm run lint` for Oxlint

## Page sections

Home, selected work, about, skills and interests, experience and community, beyond the screen, current focus, contact, and footer. Header links scroll to sections on the same page. Project cards open accessible detail dialogs; Escape and backdrop click dismiss them.

## Integrations and content notes

- CarbonLens links to the supplied public website. Other projects are described according to the supplied information, without implying they are deployed or complete products.
- The contact form validates fields locally and displays a success/explanation state, but does not transmit messages. Add a preferred email address and LinkedIn URL when ready; they were not provided.
- The browser preference notice only stores its dismissal in local storage. No analytics or tracking is installed.
- Hero background and fonts load from public remote endpoints; an abstract CSS illustration is used for the creative/art section. Replace these if locally hosted assets are preferred.
