import React, { useState, useEffect } from "react";
import { Goal } from "./GoalCard";
import toast from "react-hot-toast";

toast.success("Goal added successfully!");
toast.error("Goal deleted!");

interface GoalFormProps {
  onSave: (goal: Goal) => void;
  onCancel: () => void;
  existingGoal?: Goal;
}

const GoalForm: React.FC<GoalFormProps> = ({ onSave, onCancel, existingGoal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState<Goal["status"]>("Not Started");

  // Pre-fill form if editing
  useEffect(() => {
    if (existingGoal) {
      setTitle(existingGoal.title);
      setDescription(existingGoal.description);
      setCategory(existingGoal.category);
      setStatus(existingGoal.status);
    }
  }, [existingGoal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a title for your goal.");
      return;
    }

    const newGoal: Goal = {
      id: existingGoal ? existingGoal.id : Date.now().toString(),
      title,
      description,
      category,
      status,
    };

    onSave(newGoal);
    setTitle("");
    setDescription("");
    setCategory("");
    setStatus("Not Started");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">
        {existingGoal ? "Edit Goal" : "Add New Goal"}
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Goal title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-xl text-gray-800"
        />
        <textarea
          placeholder="Goal description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded-xl text-gray-800"
        />
        <input
          type="text"
          placeholder="Category (e.g., Web Development, Design)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border rounded-xl text-gray-800"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Goal["status"])}
          className="w-full p-3 border rounded-xl text-gray-800"
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            {existingGoal ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default GoalForm;
