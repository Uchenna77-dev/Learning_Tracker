"use client";

import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Auto-update date and time every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentDateTime(formatted);
    };

    updateDateTime(); // Initialize immediately
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-200 py-3 shadow-inner border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-6">
        {/* Copyright Section */}
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Uchenna Onuorah</span>. All rights
          reserved.
        </div>

        {/* Current Date and Time */}
        <div className="text-xs md:text-sm text-gray-400 text-center">
          {currentDateTime}
        </div>

        {/* LinkedIn Link */}
        <div className="flex items-center justify-center space-x-2">
          <a
            href="https://www.linkedin.com/in/uchenna-onuorah-351bb1143/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
