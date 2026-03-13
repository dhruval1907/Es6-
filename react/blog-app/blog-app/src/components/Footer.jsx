import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-900 text-stone-400">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-amber-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">B</span>
            </div>
            <span className="text-white font-serif text-lg font-semibold">The Ink Post</span>
          </div>
          <p className="text-sm text-stone-500 max-w-xs leading-relaxed">
            Thoughtful writing about travel, productivity, food, photography, and the art of learning.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Navigate</p>
            <Link to="/" className="text-sm text-stone-500 hover:text-white transition-colors no-underline">Home</Link>
            <Link to="/about" className="text-sm text-stone-500 hover:text-white transition-colors no-underline">About</Link>
            <Link to="/write" className="text-sm text-stone-500 hover:text-white transition-colors no-underline">Write</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Topics</p>
            <span className="text-sm text-stone-500">Travel</span>
            <span className="text-sm text-stone-500">Productivity</span>
            <span className="text-sm text-stone-500">Photography</span>
            <span className="text-sm text-stone-500">Food & Learning</span>
          </div>
        </div>
      </div>
      <div className="w-full h-12 border-t border-stone-800 flex items-center justify-center">
        <p className="text-xs text-stone-600">© 2026 The Ink Post. Built with React + Vite + Tailwind CSS.</p>
      </div>
    </footer>
  );
}
