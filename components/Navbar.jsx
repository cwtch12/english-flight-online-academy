"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path) =>
    `relative font-semibold transition-all duration-200 ${
      pathname === path
        ? "text-blue-600"
        : "text-gray-800 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 shadow-[0_4px_20px_rgba(15,91,141,0.08)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Top Row */}
        <div className="h-auto py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Logo with Airplane Icon and Text */}
          <Link href="/" className="flex items-center gap-3">
            {/* Airplane Icon */}
            <div className="flex-shrink-0">
              <Image src="/Englishflightlogo.png" alt="English Flight Logo" width={90} height={60} className="w-16 h-auto lg:w-24 lg:h-auto" priority />
            </div>
            
            {/* Text and Tagline */}
            <div className="flex flex-col">
              <div className="text-xl font-bold text-[#102f4b] lg:text-2xl">
                English Flight <span className="text-base font-semibold text-[#0f5b8d] lg:text-lg">(Online Academy)</span>
              </div>
              <div className="text-xs font-medium text-[#0f5b8d] lg:text-sm">
                Your Flight to Better English and Beyond. ✈️
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 text-sm lg:flex xl:gap-5 xl:text-base">
            <Link href="/" className={linkClass("/")}>
              <span className="inline-block pb-1">
                Home
                {pathname === "/" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-blue-600"></span>
                )}
              </span>
            </Link>

            <Link href="/about" className={linkClass("/about")}>
              <span className="inline-block pb-1">
                About
                {pathname === "/about" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-blue-600"></span>
                )}
              </span>
            </Link>

            <Link href="/courses" className={linkClass("/courses")}>
              <span className="inline-block pb-1">
                Courses
                {pathname === "/courses" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-blue-600"></span>
                )}
              </span>
            </Link>

            <Link href="/offers" className={linkClass("/offers")}>
              <span className="inline-block pb-1">
                Offers
                {pathname === "/offers" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-blue-600"></span>
                )}
              </span>
            </Link>

            <Link href="/events" className={linkClass("/events")}>
              <span className="inline-block pb-1">
                Events
                {pathname === "/events" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-blue-600"></span>
                )}
              </span>
            </Link>

            <Link href="/juniors" className={linkClass("/juniors")}>
              <span className="inline-block pb-1">
                Juniors
                {pathname === "/juniors" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-blue-600"></span>
                )}
              </span>
            </Link>

            <Link href="/contact" className={linkClass("/contact")}>
              <span className="inline-block pb-1">
                Contact
                {pathname === "/contact" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-blue-600"></span>
                )}
              </span>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="rounded-md p-2 text-2xl text-gray-800 transition hover:bg-gray-100 lg:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col gap-3 border-t border-sky-100 py-4 lg:hidden">
            <Link
              href="/"
              className={`${linkClass("/")} rounded-md px-2 py-2 hover:bg-gray-50`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`${linkClass("/about")} rounded-md px-2 py-2 hover:bg-gray-50`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/courses"
              className={`${linkClass("/courses")} rounded-md px-2 py-2 hover:bg-gray-50`}
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>

            <Link
              href="/offers"
              className={`${linkClass("/offers")} rounded-md px-2 py-2 hover:bg-gray-50`}
              onClick={() => setMenuOpen(false)}
            >
              Offers
            </Link>

            <Link
              href="/events"
              className={`${linkClass("/events")} rounded-md px-2 py-2 hover:bg-gray-50`}
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>

            <Link
              href="/juniors"
              className={`${linkClass("/juniors")} rounded-md px-2 py-2 hover:bg-gray-50`}
              onClick={() => setMenuOpen(false)}
            >
              Juniors
            </Link>

            <Link
              href="/contact"
              className={`${linkClass("/contact")} rounded-md px-2 py-2 hover:bg-gray-50`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}