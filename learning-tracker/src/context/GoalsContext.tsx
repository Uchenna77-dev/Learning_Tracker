"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { Goal } from "@/components/GoalCard";

// Context type definition
interface GoalsContextType {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  updateGoal: (goal: Goal) => void;
  deleteGoal: (id: string) => void;
  updateStatus: (id: string, status: Goal["status"]) => void;
}

// Create context
const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

// Provider component
export const GoalsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [goals, setGoals] = useState<Goal[]>([]);

  // Load goals from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("learningGoals");
    if (stored) setGoals(JSON.parse(stored));
  }, []);

  // Save goals to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("learningGoals", JSON.stringify(goals));
  }, [goals]);

  // CRUD operations
  const addGoal = (goal: Goal) => setGoals([...goals, goal]);
  const updateGoal = (updated: Goal) =>
    setGoals(goals.map((g) => (g.id === updated.id ? updated : g)));
  const deleteGoal = (id: string) => setGoals(goals.filter((g) => g.id !== id));
  const updateStatus = (id: string, status: Goal["status"]) =>
    setGoals(goals.map((g) => (g.id === id ? { ...g, status } : g)));

  return (
    <GoalsContext.Provider value={{ goals, addGoal, updateGoal, deleteGoal, updateStatus }}>
      {children}
    </GoalsContext.Provider>
  );
};

// Custom hook for cleaner usage
export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (!context) throw new Error("useGoals must be used within a GoalsProvider");
  return context;
};
