"use client";

import React from "react";
import { useRouter } from "next/navigation";

// --- Mock Lucide-React Icons ---
const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 19h10V5H2v14zM12 5l5 2 5-2v14l-5-2-5 2V5z" />
  </svg>
);

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TrendingUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const PlusCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

// --- Reusable Stat Card ---
interface StatsCardProps {
  title: string;
  value: string;
  unit?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  color,
}) => (
  <div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] border-t-4"
    style={{ borderColor: color }}
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 rounded-full" style={{ backgroundColor: color + "20" }}>
        <Icon className="w-6 h-6" style={{ color: color }} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-extrabold text-gray-900">
          {value}
          {unit && (
            <span className="text-base font-semibold ml-1 text-gray-500">
              {unit}
            </span>
          )}
        </p>
      </div>
    </div>
  </div>
);

// --- Reusable Action Button ---
interface ActionCardProps {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string; // Next.js route
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon: Icon,
  path,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(path)}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:bg-indigo-50 transition duration-300 w-full"
    >
      <Icon className="w-8 h-8 text-indigo-500 mb-3" />
      <p className="text-lg font-semibold text-gray-800">{title}</p>
      <p className="text-center text-sm text-gray-500 mt-1">{description}</p>
    </button>
  );
};

// --- Main Dashboard Component ---
const DashboardPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 font-inter p-8 space-y-12">
      {/* Hero Section */}
      <div className="relative bg-indigo-700 text-white rounded-3xl shadow-2xl p-8 sm:p-12 overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Welcome Back, Learner!
          </h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-lg">
            You are currently on track to meet <strong>80%</strong> of your
            weekly study goal. Keep the momentum going!
          </p>
          <button
            onClick={() => alert("Starting a new learning session...")}
            className="bg-teal-400 text-indigo-900 font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-teal-300 transition duration-300 transform hover:scale-105"
          >
            Start New Learning Session
          </button>
        </div>
      </div>

      {/* Progress Section */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Your Learning Snapshot
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Topics Completed"
            value="42"
            unit="modules"
            icon={BookOpenIcon}
            color="#3b82f6"
          />
          <StatsCard
            title="Total Study Time"
            value="9.5"
            unit="hours"
            icon={ClockIcon}
            color="#10b981"
          />
          <StatsCard
            title="Progress Rate"
            value="12%"
            unit="increase"
            icon={TrendingUpIcon}
            color="#f59e0b"
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Whats Next?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ActionCard
            title="Add New Course"
            description="Register for a new topic or subject to track."
            icon={PlusCircleIcon}
            path="/goals"
          />
          <ActionCard
            title="Review Progress"
            description="Quickly revise pending concepts and definitions."
            icon={BookOpenIcon}
            path="/dashboard"
          />
          <ActionCard
            title="Weekly Goal Check"
            description="Check your progress against your current targets."
            icon={ClockIcon}
            path="/dashboard"
          />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
