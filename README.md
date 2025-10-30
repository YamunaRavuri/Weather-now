# Weather Now

Simple React app to check current weather for any city using the Open‑Meteo API and an interactive map (Leaflet / react-leaflet).

Features
- Search for a city (Open‑Meteo geocoding) and fetch current weather (Open‑Meteo forecast current_weather).
- Interactive Leaflet map with marker and popup for the selected city.
- Responsive UI, basic error handling, and loading states.

Stack
- React (Vite)
- react-leaflet + Leaflet
- Open‑Meteo (geocoding + current weather)

Run locally
1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

Open the printed local URL (usually http://localhost:5173) in your browser.

Deployment
- You can deploy to CodeSandbox or StackBlitz by importing the repository or using this folder as a Vite template.

ChatGPT conversation link
- As requested in the challenge, include a link to your ChatGPT conversation here so reviewers can see how the solution was developed. (Add the conversation link below.)

Notes and next steps
- Improvements that would add value: caching results, multiple search suggestions, unit tests, forecasts, and improved accessibility.
