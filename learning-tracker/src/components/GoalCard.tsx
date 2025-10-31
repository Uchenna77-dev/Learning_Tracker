import React from "react";

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "Not Started" | "In Progress" | "Completed";
}

interface GoalCardProps {
  goal: Goal;
  onEdit: (goal: Goal) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, newStatus: Goal["status"]) => void;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal, onEdit, onDelete, onStatusChange }) => {
  const statusColors = {
    "Not Started": "bg-gray-200 text-gray-700",
    "In Progress": "bg-yellow-200 text-yellow-800",
    "Completed": "bg-green-200 text-green-800",
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{goal.title}</h3>
      <p className="text-gray-700 mb-3">{goal.description}</p>
      <p className="text-sm text-gray-500 mb-3">Category: {goal.category}</p>

      <span
        className={`text-sm px-3 py-1 rounded-full ${statusColors[goal.status]} mb-4 inline-block`}
      >
        {goal.status}
      </span>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(goal)}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(goal.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
        >
          Delete
        </button>

        <select
          value={goal.status}
          onChange={(e) => onStatusChange(goal.id, e.target.value as Goal["status"])}
          className="px-3 py-2 rounded-xl border text-sm"
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
    </div>
  );
};

export default GoalCard;
