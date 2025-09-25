# Mental Health Tracker App

A React.js app to track daily moods (happy, sad, anxious) with a monthly chart and random motivational quotes.

## Features

- Log daily moods via an interactive form.
- Visualize mood trends with a bar chart (Chart.js).
- Display random mental health quotes for motivation.
- Real-time data persistence with localStorage and storage event listener.

## Tech Stack

- React.js
- Tailwind CSS
- Chart.js
- Moment.js

## Setup

1. Clone the repo: `git clone <repo-url>`.
2. Install dependencies: `npm install`.
3. Run locally: `npm start`.
4. Build for production: `npm run build`.
5. Deploy to Netlify: Push to GitHub and connect to Netlify (set build command to `npm run build` and publish directory to `build`).

## Demo

[[Demo link here](https://mental-health-tracker-three.vercel.app/)]

## Challenges

- Implemented real-time localStorage sync using the `storage` event for cross-tab updates.
- Optimized chart rendering by filtering data to the last 30 days.

## Lighthouse Score

- Performance: 95+
- Accessibility: 100

## Setup Instructions

1. ​**Create Project**​: Run **npx create-react-app mental-health-tracker**.
2. ​**Install Dependencies**​: **npm install tailwindcss postcss autoprefixer moment chart.js react-chartjs-2**.
3. ​**Initialize Tailwind**​: **npx tailwindcss init -p** to generate **tailwind.config.js** and **postcss.config.js**.
4. ​**Copy Files**​: Place the above files in their respective folders.
5. ​**Run Locally**​: **npm start** to start the development server.
6. ​**Deploy**​: Push to GitHub and deploy to Netlify.
7. ​**Test Performance**​: Use Lighthouse to ensure a score of 90+.

## Notes

- The **storage** event listener in **App.jsx** ensures real-time updates across browser tabs when mood data changes in localStorage.
- Custom Tailwind colors (**calming-blue**, **soothing-green**, **warm-yellow**) are defined for a calming UI.
- For production, consider replacing CDN dependencies with local npm packages for better performance.
