import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SearchBox = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-5 py-4 text-lg rounded-full bg-white shadow-md
                   border-2 border-transparent focus:border-weather-blue
                   focus:outline-none focus:ring-2 focus:ring-weather-blue/20
                   text-weather-gray-dark placeholder-weather-gray
                   transition-all duration-300"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2
                   px-6 py-2 rounded-full bg-weather-blue
                   text-white font-medium shadow-lg
                   hover:bg-weather-blue-dark
                   disabled:bg-weather-gray disabled:cursor-not-allowed
                   transition-all duration-300"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              <span>Searching...</span>
            </div>
          ) : (
            'Search'
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default SearchBox;