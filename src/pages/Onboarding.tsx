import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Umbrella, Sun, Ship, Calendar, MessageCircle, ChevronRight } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <MapPin className="w-12 h-12" />,
    title: "Добро пожаловать в Phuket Guru",
    description: "Ваш персональный помощник для идеального отдыха на Пхукете",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    icon: <Compass className="w-12 h-12" />,
    title: "Умное планирование",
    description: "Создавайте индивидуальные маршруты и получайте персональные рекомендации",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    icon: <Ship className="w-12 h-12" />,
    title: "Всё для путешествия",
    description: "Погода, экскурсии, места и советы – всё в одном приложении",
    image: "https://images.unsplash.com/photo-1583830379747-068fd6d2f476?auto=format&fit=crop&w=800&q=80"
  }
];

export function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWebApp, setIsWebApp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if running in Telegram Web App
    if (window.Telegram?.WebApp) {
      setIsWebApp(true);
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  const nextSlide = () => {
    if (currentSlide === features.length - 1) {
      localStorage.setItem('onboardingCompleted', 'true');
      navigate('/home');
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="h-screen flex flex-col"
        >
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
            <img
              src={features[currentSlide].image}
              alt={features[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-12">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-8 flex justify-center"
            >
              <div className="p-4 rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 text-teal-400">
                {features[currentSlide].icon}
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                {features[currentSlide].title}
              </h2>
              <p className="text-lg text-gray-300">
                {features[currentSlide].description}
              </p>
            </motion.div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mb-8">
              {features.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 rounded-full ${
                    index === currentSlide 
                      ? 'w-8 bg-teal-500' 
                      : 'w-2 bg-gray-600'
                  }`}
                  animate={{ width: index === currentSlide ? 32 : 8 }}
                />
              ))}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={nextSlide}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2
                ${isWebApp ? 'bg-[var(--tg-theme-button-color)] text-[var(--tg-theme-button-text-color)]' 
                          : 'bg-teal-500 hover:bg-teal-600 text-white'}`}
            >
              <span>{currentSlide === features.length - 1 ? 'Начать' : 'Далее'}</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}