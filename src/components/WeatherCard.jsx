import React from 'react'

const weatherConditions = {
  0: { icon: '☀️', label: 'Clear sky' },
  1: { icon: '🌤️', label: 'Mainly clear' },
  2: { icon: '⛅', label: 'Partly cloudy' },
  3: { icon: '☁️', label: 'Overcast' },
  45: { icon: '🌫️', label: 'Foggy' },
  48: { icon: '🌫️', label: 'Depositing rime fog' },
  51: { icon: '🌧️', label: 'Light drizzle' },
  53: { icon: '🌧️', label: 'Moderate drizzle' },
  55: { icon: '🌧️', label: 'Dense drizzle' },
  61: { icon: '🌧️', label: 'Slight rain' },
  63: { icon: '🌧️', label: 'Moderate rain' },
  65: { icon: '🌧️', label: 'Heavy rain' },
  71: { icon: '�️', label: 'Slight snow' },
  73: { icon: '🌨️', label: 'Moderate snow' },
  75: { icon: '🌨️', label: 'Heavy snow' },
  77: { icon: '�️', label: 'Snow grains' },
  80: { icon: '🌧️', label: 'Slight rain showers' },
  81: { icon: '🌧️', label: 'Moderate rain showers' },
  82: { icon: '�️', label: 'Violent rain showers' },
  85: { icon: '🌨️', label: 'Slight snow showers' },
  86: { icon: '�️', label: 'Heavy snow showers' },
  95: { icon: '⛈️', label: 'Thunderstorm' },
  96: { icon: '⛈️', label: 'Thunderstorm with slight hail' },
  99: { icon: '⛈️', label: 'Thunderstorm with heavy hail' },
}

export default function WeatherCard({ location, weather }) {
  const condition = weatherConditions[weather.weathercode] || { icon: '❓', label: 'Unknown' }
  const date = new Date(weather.time)

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{location.name}</h2>
          <p className="text-gray-500">{location.country}</p>
        </div>
        <div className="text-6xl">{condition.icon}</div>
      </div>

      <div className="mb-6">
        <div className="text-5xl font-bold text-gray-900 mb-2">
          {Math.round(weather.temperature)}°C
        </div>
        <p className="text-gray-600">{condition.label}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Wind Speed</p>
          <p className="text-gray-900 font-medium">{weather.windspeed} km/h</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Updated</p>
          <p className="text-gray-900 font-medium">
            {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  )
}
