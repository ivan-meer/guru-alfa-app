import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export function ChatBot({ onClose }: Props) {
  const [message, setMessage] = useState('');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 md:w-96 bg-white dark:bg-gray-800 md:rounded-xl shadow-2xl z-50"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 text-gray-900 dark:text-white">
            <Bot className="text-primary" />
            <span>Phuket Guru AI</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-[calc(100vh-8rem)] md:h-96 overflow-y-auto p-4">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 mb-4">
            <p className="text-gray-900 dark:text-white">
              Привет! Я ваш персональный гид по Пхукету. Чем могу помочь?
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Задайте вопрос..."
              className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="p-2 bg-primary rounded-lg text-white hover:bg-primary/90">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}