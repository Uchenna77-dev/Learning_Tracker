"use client";

import { useState } from "react";
import { useGoals } from "@/context/GoalsContext";
import GoalCard, { Goal } from "@/components/GoalCard";
import GoalForm from "@/components/GoalForm";

export default function GoalsPage() {
  const { goals, addGoal, updateGoal, deleteGoal, updateStatus } = useGoals();

  const [isFormVisible, setFormVisible] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);

  const handleSave = (goal: Goal) => {
    if (editingGoal) {
      updateGoal(goal);
      setEditingGoal(null);
    } else {
      addGoal(goal);
    }
    setFormVisible(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">🎯 My Learning Goals</h1>

      {!isFormVisible && (
        <button
          onClick={() => setFormVisible(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          ➕ Add Goal
        </button>
      )}

      {isFormVisible && (
        <GoalForm
          onSave={handleSave}
          onCancel={() => {
            setFormVisible(false);
            setEditingGoal(null);
          }}
          existingGoal={editingGoal ?? undefined}
        />
      )}

      <div className="grid gap-4 mt-6">
        {goals.length > 0 ? (
          goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onEdit={(g) => {
                setEditingGoal(g);
                setFormVisible(true);
              }}
              onDelete={deleteGoal}
              onStatusChange={updateStatus}
            />
          ))
        ) : (
          <p className="text-gray-600">No goals yet. Add your first one above!</p>
        )}
      </div>
    </div>
  );
}
