import React, { useState } from 'react';
import {
  MapPin,
  Star,
  Sun,
  Heart,
  Share,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Compass
} from 'lucide-react';

const DirectionPage = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/500" 
            alt="Kata Area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-900" />
        </div>

        {/* Navigation */}
        <div className="relative">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <button className="flex items-center text-white space-x-2">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Areas</span>
            </button>
            <div className="flex space-x-2">
              <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 pt-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5" />
              <span>South Phuket</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Kata Area</h1>
            <p className="text-lg text-white/90 mb-6">
              A perfect blend of serene beaches, vibrant nightlife, and local culture
            </p>
            <div className="flex items-center space-x-6 text-white">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                <span>4.8</span>
              </div>
              <div>150+ Places</div>
              <div>2,500+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <QuickStat
            icon={<Sun />}
            label="Climate"
            value="Tropical"
          />
          <QuickStat
            icon={<Clock />}
            label="Best Time"
            value="Nov-Apr"
          />
          <QuickStat
            icon={<Coffee />}
            label="Activities"
            value="50+"
          />
          <QuickStat
            icon={<Compass />}
            label="Area Size"
            value="12 km²"
          />
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 border-b border-gray-800 mb-8">
          {['overview', 'locations', 'activities', 'transport'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`pb-4 px-2 text-sm font-medium capitalize transition-colors 
                ${selectedTab === tab 
                  ? 'text-white border-b-2 border-indigo-500' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div className="prose prose-invert">
              <p className="text-gray-300 leading-relaxed">
                Kata is one of Phuket's most complete destinations, offering visitors
                everything from stunning beaches and high-end resorts to local markets
                and authentic experiences. The area is particularly famous for its
                postcard-perfect bay views and excellent surfing conditions during
                the summer months.
              </p>
            </div>

            {/* Location Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CategoryCard
                icon={<Sun />}
                title="Beaches"
                count={4}
                locations={['Kata Beach', 'Kata Noi Beach']}
              />
              <CategoryCard
                icon={<Coffee />}
                title="Dining"
                count={45}
                locations={['Beach Road', 'Kata Night Market']}
              />
            </div>

            {/* Popular Locations */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Popular Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <LocationCard key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Weather Widget */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Current Weather</h3>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Sun className="w-8 h-8 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-2xl font-bold">32°C</div>
                      <div className="text-gray-400">Sunny</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Humidity</div>
                    <div>75%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <WeatherRow day="Today" temp="32°" />
                  <WeatherRow day="Tomorrow" temp="31°" />
                  <WeatherRow day="Saturday" temp="30°" />
                </div>
              </div>

              {/* Popular Times */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Times</h3>
                {/* Graph placeholder */}
                <div className="h-32 bg-gray-700 rounded-lg mb-4" />
                <div className="text-sm text-gray-400">
                  Based on average visitor traffic
                </div>
              </div>

              {/* Getting There */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Getting There</h3>
                <div className="space-y-4">
                  <TransportOption
                    mode="Taxi"
                    duration="45 min"
                    price="from ฿700"
                  />
                  <TransportOption
                    mode="Bus"
                    duration="1h 20min"
                    price="฿150"
                  />
                  <TransportOption
                    mode="Motorbike"
                    duration="35 min"
                    price="฿250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const QuickStat = ({ icon, label, value }) => (
  <div className="bg-gray-800 rounded-xl p-4">
    <div className="text-indigo-400 mb-2">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div className="text-sm text-gray-400">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

const CategoryCard = ({ icon, title, count, locations }) => (
  <div className="bg-gray-800 rounded-xl p-6">
    <div className="flex items-start justify-between mb-4">
      <div>
        <div className="text-indigo-400 mb-2">
          {React.cloneElement(icon, { size: 24 })}
        </div>
        <h4 className="font-semibold">{title}</h4>
        <div className="text-gray-400 text-sm">{count} places</div>
      </div>
      <ChevronRight className="text-gray-400" />
    </div>
    <div className="space-y-1">
      {locations.map((loc, i) => (
        <div key={i} className="text-sm text-gray-300">{loc}</div>
      ))}
    </div>
  </div>
);

const LocationCard = () => (
  <div className="bg-gray-800 rounded-xl overflow-hidden group hover:bg-gray-750 transition-colors">
    <div className="relative h-48">
      <img 
        src="/api/placeholder/400/200"
        alt="Location"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-black/50 rounded-full px-2 py-1">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <span className="text-sm">4.8</span>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-semibold mb-1">Kata Beach</h4>
      <div className="flex items-center text-gray-400 text-sm mb-2">
        <MapPin className="w-4 h-4 mr-1" />
        <span>15 min walk</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <span className="text-indigo-400">Open</span>
          <span className="text-gray-400"> · Closes 7 PM</span>
        </div>
        <button className="text-indigo-400 hover:text-indigo-300">
          Details →
        </button>
      </div>
    </div>
  </div>
);

const WeatherRow = ({ day, temp }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-gray-400">{day}</span>
    <div className="flex items-center space-x-2">
      <Sun className="w-4 h-4 text-yellow-400" />
      <span>{temp}</span>
    </div>
  </div>
);

const TransportOption = ({ mode, duration, price }) => (
  <div className="flex items-center justify-between text-sm">
    <div>
      <div className="font-medium mb-1">{mode}</div>
      <div className="text-gray-400">{duration}</div>
    </div>
    <div className="text-indigo-400">{price}</div>
  </div>
);

export default DirectionPage;