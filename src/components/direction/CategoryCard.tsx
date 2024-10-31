import React from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  locations: string[];
}

export function CategoryCard({ icon: Icon, title, count, locations }: CategoryCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-indigo-400 mb-2">
            <Icon size={24} />
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
}