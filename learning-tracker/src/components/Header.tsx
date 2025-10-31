"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Learning Tracker</h1>
      <nav className="flex gap-4">
        <Link
          href="/"
          className={pathname === "/" ? "underline font-semibold" : ""}
        >
          Home
        </Link>
        <Link
          href="/goals"
          className={pathname === "/goals" ? "underline font-semibold" : ""}
        >
          Goals
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "underline font-semibold" : ""}
        >
          About
        </Link>
        <Link
          href="/dashboard"
          className={pathname === "/dashboard" ? "underline font-semibold" : ""}
        >
            Dashboard
        </Link>

      </nav>
    </header>
  )
}
