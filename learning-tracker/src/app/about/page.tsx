"use client";

import { FaChartLine, FaBullseye, FaClock, FaBrain } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">
          About <span className="text-blue-500">Learning Tracker</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Learning Tracker is your personal growth companion — designed to help you stay
          organized, consistent, and motivated as you pursue your learning goals.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <FaBullseye className="text-blue-500 text-3xl mb-3" />
          <h3 className="text-lg font-semibold mb-2">Set Clear Goals</h3>
          <p className="text-gray-600 text-sm">
            Define your learning targets and milestones so you always know what you’re
            working toward.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <FaClock className="text-green-500 text-3xl mb-3" />
          <h3 className="text-lg font-semibold mb-2">Track Your Progress</h3>
          <p className="text-gray-600 text-sm">
            Monitor your weekly performance, visualize growth trends, and celebrate small
            wins that lead to big results.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <FaChartLine className="text-yellow-500 text-3xl mb-3" />
          <h3 className="text-lg font-semibold mb-2">Analyze Performance</h3>
          <p className="text-gray-600 text-sm">
            Identify where you’re excelling or falling behind through insightful
            dashboards and progress charts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <FaBrain className="text-purple-500 text-3xl mb-3" />
          <h3 className="text-lg font-semibold mb-2">Stay Motivated</h3>
          <p className="text-gray-600 text-sm">
            Receive personalized suggestions that keep you inspired and focused on your
            learning journey.
          </p>
        </div>
      </section>

      {/* Vision / Mission Section */}
      <section className="bg-white rounded-2xl shadow p-8 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          At Learning Tracker, we believe that growth is a journey — not a race.  
          Our mission is to empower lifelong learners like you with the tools to plan,
          track, and reflect on your progress.  
          Whether you are mastering a new programming language, preparing for an exam, or
          exploring new skills, Learning Tracker keeps you accountable and inspired.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <p className="text-lg text-gray-700 font-medium mb-4">
          🚀 Ready to level up your learning?
        </p>
        <a
          href="/goals"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-colors duration-300"
        >
          Start Tracking Your Goals
        </a>
      </section>
    </main>
  );
}

