import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-[#faf9f6] border-b border-stone-200 sticky top-0 z-50">
      <div className="w-full h-[72px] flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 bg-stone-800 rounded-sm flex items-center justify-center">
            <span className="text-[#faf9f6] font-bold text-sm">B</span>
          </div>
          <span className="text-stone-800 font-serif text-xl font-semibold tracking-tight">
            The Ink Post
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide transition-colors duration-200 no-underline ${
              location.pathname === "/"
                ? "text-stone-900 border-b-2 border-amber-500"
                : "text-stone-500 hover:text-stone-900"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium tracking-wide transition-colors duration-200 no-underline ${
              location.pathname === "/about"
                ? "text-stone-900 border-b-2 border-amber-500"
                : "text-stone-500 hover:text-stone-900"
            }`}
          >
            About
          </Link>
          <Link
            to="/write"
            className="h-9 px-5 bg-stone-800 text-[#faf9f6] text-sm font-medium rounded-sm hover:bg-stone-700 transition-colors duration-200 flex items-center no-underline"
          >
            Write a Post
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-full h-0.5 bg-stone-800 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-full h-0.5 bg-stone-800 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-0.5 bg-stone-800 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#faf9f6] border-t border-stone-200 flex flex-col">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="w-full h-12 flex items-center px-6 text-stone-700 text-sm font-medium hover:bg-stone-100 no-underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="w-full h-12 flex items-center px-6 text-stone-700 text-sm font-medium hover:bg-stone-100 no-underline"
          >
            About
          </Link>
          <Link
            to="/write"
            onClick={() => setMenuOpen(false)}
            className="w-full h-12 flex items-center px-6 text-stone-700 text-sm font-medium hover:bg-stone-100 no-underline"
          >
            Write a Post
          </Link>
        </div>
      )}
    </nav>
  );
}
