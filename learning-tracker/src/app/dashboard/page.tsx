"use client";

import { useGoals } from "@/context/GoalsContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useEffect, useState } from "react";
import learningInterests from "@/data/learningInterests.json";

export default function DashboardPage() {
  const { goals } = useGoals();
  const [suggestionSet, setSuggestionSet] = useState<any>(null);
  const [showMore, setShowMore] = useState(false);

  // --- Summary Data ---
  const summary = {
    total: goals.length,
    completed: goals.filter((g) => g.status === "Completed").length,
    inProgress: goals.filter((g) => g.status === "In Progress").length,
    notStarted: goals.filter((g) => g.status === "Not Started").length,
  };

  const completionRate =
    summary.total > 0 ? (summary.completed / summary.total) * 100 : 0;

  const COLORS = ["#4CAF50", "#2196F3", "#FFC107"];

  const data = [
    { name: "Completed", value: summary.completed },
    { name: "In Progress", value: summary.inProgress },
    { name: "Not Started", value: summary.notStarted },
  ];

  // --- Weekly Progress (mock data) ---
  const weeklyProgressData = [
    { day: "Mon", progress: 40 },
    { day: "Tue", progress: 55 },
    { day: "Wed", progress: 60 },
    { day: "Thu", progress: 80 },
    { day: "Fri", progress: 70 },
    { day: "Sat", progress: 90 },
    { day: "Sun", progress: 50 },
  ];

  const avgWeeklyProgress =
    weeklyProgressData.reduce((sum, d) => sum + d.progress, 0) /
    weeklyProgressData.length;

  // --- Dynamic Suggestions ---
  useEffect(() => {
    // Randomly pick a learning interest
    const randomInterest =
      learningInterests[Math.floor(Math.random() * learningInterests.length)];
    setSuggestionSet(randomInterest);
  }, []);

  return (
    <main className="p-6 space-y-8 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-4">📊 Learning Dashboard</h1>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow text-center truncate">
          <h2 className="text-gray-600 text-sm whitespace-nowrap">
            Total Goals
          </h2>
          <p className="text-2xl font-bold text-blue-600">{summary.total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center truncate">
          <h2 className="text-gray-600 text-sm whitespace-nowrap">
            Completed
          </h2>
          <p className="text-2xl font-bold text-green-600">
            {summary.completed}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center truncate">
          <h2 className="text-gray-600 text-sm whitespace-nowrap">
            Completion Rate
          </h2>
          <p className="text-2xl font-bold text-purple-600">
            {completionRate.toFixed(1)}%
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-green-500 h-full rounded-full transition-all duration-700"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </section>

      {/* Grid: Weekly Progress + Goal Status */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weekly Progress */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
          <div className="flex-1 min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyProgressData}
                margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 12 }}
                  interval={0}
                  height={30}
                />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar
                  dataKey="progress"
                  fill="#4F46E5"
                  radius={[6, 6, 0, 0]}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-600 text-sm text-center mt-3 truncate">
            Average Weekly Progress:{" "}
            <span className="font-semibold text-indigo-600">
              {avgWeeklyProgress.toFixed(1)}%
            </span>
          </p>
        </div>

        {/* Goal Status */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">Goal Status Overview</h2>
          <div className="flex-1 min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label
                >
                  {data.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  wrapperStyle={{
                    fontSize: "12px",
                    width: "100%",
                    textAlign: "center",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 💡 Enhanced Suggestions */}
      <section className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">💡 Personalized Suggestions</h2>
        {suggestionSet ? (
          <div>
            <p className="text-gray-700 mb-3">
              Based on your interest in{" "}
              <span className="font-semibold text-indigo-600">
                {suggestionSet.interest}
              </span>
              , here’s a tip:
            </p>
            <p className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-gray-800">
              {suggestionSet.suggestions[
                Math.floor(Math.random() * suggestionSet.suggestions.length)
              ]}
            </p>

            {/* View More */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              {showMore ? "Hide Suggestions ▲" : "View More ▼"}
            </button>

            {showMore && (
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                {suggestionSet.suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <p className="text-gray-500 italic">Loading suggestions...</p>
        )}
      </section>
    </main>
  );
}
