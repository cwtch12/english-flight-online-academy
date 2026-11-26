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
        ? "text-[#f6c343]"
        : "text-white/90 hover:text-[#f6c343]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#071a33]/95 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Top Row */}
        <div className="h-auto py-3 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="English Flight: Spoken English and Communication Training"
            className="flex items-center gap-3"
          >
            <Image
              src="/Englishflightlogo.png"
              alt="English Flight"
              width={303}
              height={320}
              className="h-16 w-auto lg:h-20"
              priority
            />
            <span className="max-w-48 text-sm font-semibold leading-5 text-white sm:max-w-none sm:text-base">
              Spoken English &amp; Communication Training
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 text-sm lg:flex xl:gap-5 xl:text-base">
            <Link href="/" className={linkClass("/")}>
              <span className="inline-block pb-1">
                Home
                {pathname === "/" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-[#f6c343]"></span>
                )}
              </span>
            </Link>

            <Link href="/about" className={linkClass("/about")}>
              <span className="inline-block pb-1">
                About
                {pathname === "/about" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-[#f6c343]"></span>
                )}
              </span>
            </Link>

            <Link href="/courses" className={linkClass("/courses")}>
              <span className="inline-block pb-1">
                Courses
                {pathname === "/courses" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-[#f6c343]"></span>
                )}
              </span>
            </Link>

            <Link href="/membership" className={linkClass("/membership")}>
              <span className="inline-block pb-1">
                Membership
                {pathname === "/membership" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-[#f6c343]"></span>
                )}
              </span>
            </Link>

            <Link href="/offers" className={linkClass("/offers")}>
              <span className="inline-block pb-1">
                Offers
                {pathname === "/offers" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-[#f6c343]"></span>
                )}
              </span>
            </Link>

            <Link href="/events" className={linkClass("/events")}>
              <span className="inline-block pb-1">
                Events
                {pathname === "/events" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-[#f6c343]"></span>
                )}
              </span>
            </Link>

            <Link href="/contact" className={linkClass("/contact")}>
              <span className="inline-block pb-1">
                Contact
                {pathname === "/contact" && (
                  <span className="mt-1 block h-0.5 rounded-full bg-[#f6c343]"></span>
                )}
              </span>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="rounded-md p-2 text-2xl text-white transition hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col gap-3 border-t border-white/10 py-4 lg:hidden">
            <Link
              href="/"
              className={`${linkClass("/")} rounded-md px-2 py-2 hover:bg-white/10`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`${linkClass("/about")} rounded-md px-2 py-2 hover:bg-white/10`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/courses"
              className={`${linkClass("/courses")} rounded-md px-2 py-2 hover:bg-white/10`}
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>

            <Link
              href="/membership"
              className={`${linkClass("/membership")} rounded-md px-2 py-2 hover:bg-white/10`}
              onClick={() => setMenuOpen(false)}
            >
              Membership
            </Link>

            <Link
              href="/offers"
              className={`${linkClass("/offers")} rounded-md px-2 py-2 hover:bg-white/10`}
              onClick={() => setMenuOpen(false)}
            >
              Offers
            </Link>

            <Link
              href="/events"
              className={`${linkClass("/events")} rounded-md px-2 py-2 hover:bg-white/10`}
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>

            <Link
              href="/contact"
              className={`${linkClass("/contact")} rounded-md px-2 py-2 hover:bg-white/10`}
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