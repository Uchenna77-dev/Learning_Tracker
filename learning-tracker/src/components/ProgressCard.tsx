"use client";
import React from "react";

interface ProgressCardProps {
  title: string;
  value: number;
  goal: number;
  suggestion?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, value, goal, suggestion }) => {
  const percentage = Math.min((value / goal) * 100, 100);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mb-1">
        {value} / {goal} completed
      </p>
      {suggestion && (
        <p className="text-sm text-gray-500 italic">💡 {suggestion}</p>
      )}
    </div>
  );
};

export default ProgressCard;
