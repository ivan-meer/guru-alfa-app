import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QuickStatProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function QuickStat({ icon: Icon, label, value }: QuickStatProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="text-indigo-400 mb-2">
        <Icon size={20} />
      </div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}