📘 Project Summary

Weather Now is a lightweight web application built with React, Tailwind CSS, and Open-Meteo API to allow users to check real-time weather information for any city worldwide.

It includes an interactive map (Leaflet), a smooth UI (Framer Motion), and responsive design suitable for mobile and desktop users.

The project fulfills the user need for Jamie — an outdoor enthusiast who wants quick, easy access to current weather data.

⚙️ Technical Decisions
1️⃣ Framework – React

Reason: React provides a modular structure with fast rendering and easy state management using hooks (useState, useEffect).

Benefit: Enables efficient UI updates when fetching API data and switching cities.

2️⃣ Styling – Tailwind CSS

Reason: Rapid utility-first styling allowed for faster prototyping and consistent design.

Benefit: Minimal CSS files, responsive layout out-of-the-box.

Example: Class-based utility styling such as

<div className="bg-white shadow-md rounded-xl p-6">...</div>

3️⃣ Animation – Framer Motion

Reason: To improve UX with smooth component transitions (fade-in of weather cards, loading animations).

Benefit: Adds polish and interactivity with minimal code.

Used In: SearchBox.jsx (loading spinner + entrance), WeatherCard.jsx (fade-in).

4️⃣ Data Source – Open-Meteo API

Reason: 100% free and no authentication required.

Endpoints Used:

Geocoding (get latitude & longitude)

Weather Forecast (fetch current weather)

Benefit: Simple JSON response, easy to parse and display.

5️⃣ Map Integration – React Leaflet

Reason: To visually show searched city location.

Benefit: Enhances usability and context for users like Jamie (outdoor users).

Functionality: Map auto-centers based on coordinates from the geocoding API.

🧩 Component Design
Component	Purpose	Key Props
SearchBox.jsx	Accepts city input, triggers API call	onSearch, isLoading
WeatherCard.jsx	Displays weather details and icons	weather, location
MapView.jsx	Displays map of selected location	coords
App.jsx	Central logic for fetching data and managing state	—

Each component was designed to be reusable, independent, and clear in purpose.

💫 UX & UI Considerations

Clean and minimal card-based layout for easy readability.

Animated input and search states for feedback.

Emoji-based weather icons — lightweight and universally understood.

Responsive layout tested on:

Desktop (Chrome, Edge)

Mobile (Chrome DevTools responsive mode)

🧪 Testing Notes

Test Scenarios Covered:

✅ Searching a valid city (e.g., “London”, “Tokyo”) → Displays weather + map.

⚠️ Searching invalid city → Alerts user gracefully (“City not found”).

🔁 Rapid repeated searches → Loading spinner prevents double requests.

🛰️ Map centers correctly to the coordinates returned by the API.

📱 Responsive UI verified for mobile and tablet breakpoints.

No API keys required, so app works out of the box without setup.

🌐 Deployment on Netlify

Why Netlify: Free tier, easy GitHub integration, and fast global CDN.

Deployment Steps:

npm run build

Deploy /dist directory via Netlify drop or GitHub CI.

Add netlify.toml for build config:

[build]
  command = "npm run build"
  publish = "dist"

🤝 Collaboration with ChatGPT (AI Assistance)
Level 1 – Working with AI

Used ChatGPT (GPT-5) for:

Interpreting user requirements.

Designing the component hierarchy and logic.

Generating responsive Tailwind layouts.

Improving UX (animations, color palette, error states).

Drafting README and documentation.

The final implementation was tested and refined manually in VS Code.

ChatGPT Link:
👉 (Paste your specific ChatGPT conversation link here when submitting)

🧾 Future Improvements

Add a 3-day or 7-day forecast view.

Integrate temperature units toggle (°C ↔ °F).

Add dark mode using Tailwind’s theme system.

Include PWA support for offline access.

🏁 Conclusion

This project demonstrates:

Full-cycle understanding of user needs to implementation.

Clean, readable React code with modern practices.

Integration of multiple APIs and libraries (Open-Meteo + Leaflet).

Deployment pipeline knowledge (Netlify).

The final product is a responsive, reliable, and user-friendly weather app that meets the outlined requirements.
