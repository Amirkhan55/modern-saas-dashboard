# Modern SaaS Dashboard

Modern SaaS dashboard frontend built with React, Tailwind CSS, Redux Toolkit, React Router and Recharts.

## Requirements

- Node.js 18+
- npm 9+

## Run

```bash
npm install
npm start
```

Then open the local development URL shown in your browser.

## Production build

```bash
npm run build
npm run preview
```

## Included

- Responsive SaaS dashboard
- Sidebar/navigation
- Dashboard KPI cards
- Revenue chart
- User management with Redux
- Projects
- Analytics
- Notifications
- Settings
- Profile
- Login screen
- Reusable Button/Card/Badge/Modal components
- Accessibility-friendly labels and focus states
- API service layer placeholder for backend integration
- Tailwind design tokens

## Backend integration

Replace `src/services/api.js` with your real REST API calls. The frontend structure is suitable for a Node.js/NestJS backend.

## Figma handoff

The implementation uses a consistent design system:
- 4/8/16/24/32 spacing rhythm
- 6/10/12/16px component radii
- Inter typography
- Indigo brand scale
- Semantic status badges
- Reusable cards, buttons, inputs and modal patterns

This codebase is the frontend implementation portion of the SOW. A `.fig` source file cannot be generated reliably as code; the UI tokens and component structure above are organized so they can be recreated directly as Figma components/variants.
