import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import L from 'leaflet';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';

// Fix marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapRecenter = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 10);
    }
  }, [center, map]);
  return null;
};

export default function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    setWeather(null);
    setLocation(null);

    try {
      // Geocoding
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          query
        )}&count=1&language=en&format=json`
      );

      if (!geoResponse.data.results?.length) {
        throw new Error('City not found');
      }

      const { latitude, longitude, name, country } = geoResponse.data.results[0];
      
      // Weather data
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
      );

      if (!weatherResponse.data.current_weather) {
        throw new Error('Weather data not available');
      }

      setLocation({ latitude, longitude, name, country });
      setWeather(weatherResponse.data.current_weather);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-weather-gray-dark mb-6">
            WeatherNow
          </h1>
          <SearchBox onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 mb-8">
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md mb-8"
            >
              <p className="text-red-700">{error}</p>
            </motion.div>
          )}

          {!error && !weather && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h2 className="text-2xl font-semibold text-weather-gray-dark mb-2">
                Welcome to WeatherNow
              </h2>
              <p className="text-weather-gray">
                Enter a city name above to get current weather conditions
              </p>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {weather && location && (
              <div className="lg:sticky lg:top-8">
                <WeatherCard weather={weather} location={location} />
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px] lg:min-h-[700px]">
              <MapContainer
                center={location ? [location.latitude, location.longitude] : [20, 0]}
                zoom={location ? 12 : 2}
                className="h-full w-full"
                scrollWheelZoom={true}
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {location && (
                  <>
                    <MapRecenter center={[location.latitude, location.longitude]} />
                    <Marker position={[location.latitude, location.longitude]}>
                      <Popup>
                        <div className="font-semibold">{location.name}</div>
                        <div className="text-sm text-gray-600">{location.country}</div>
                      </Popup>
                    </Marker>
                  </>
                )}
              </MapContainer>
            </div>
          </div>
        </AnimatePresence>
      </main>

      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-weather-gray">
            Powered by Open-Meteo API · Map data &copy; OpenStreetMap contributors
          </p>
        </div>
      </footer>
    </div>
  );
}
