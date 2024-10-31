import React from 'react';

interface TransportOptionProps {
  mode: string;
  duration: string;
  price: string;
}

export function TransportOption({ mode, duration, price }: TransportOptionProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div>
        <div className="font-medium mb-1">{mode}</div>
        <div className="text-gray-400">{duration}</div>
      </div>
      <div className="text-indigo-400">{price}</div>
    </div>
  );
}