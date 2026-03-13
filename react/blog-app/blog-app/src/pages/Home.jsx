import { useState } from "react";
import { posts, categories } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="w-full min-h-screen bg-[#faf9f6]">
      {/* Hero Banner */}
      <div className="w-full h-[160px] bg-stone-900 flex flex-col items-center justify-center">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-2">
          Ideas Worth Reading
        </p>
        <h1 className="text-white font-serif text-4xl md:text-5xl font-bold tracking-tight">
          The Ink Post
        </h1>
        <p className="text-stone-400 text-sm mt-2">
          Travel · Productivity · Photography · Food · Learning
        </p>
      </div>

      {/* Search + Filter Bar */}
      <div className="w-full h-[64px] border-b border-stone-200 bg-white flex items-center px-6 md:px-12 gap-4 sticky top-[72px] z-40">
        {/* Search */}
        <div className="flex items-center gap-2 flex-1 max-w-xs h-9 border border-stone-200 rounded-sm px-3 bg-stone-50">
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-stone-700 placeholder-stone-400 outline-none"
          />
        </div>

        {/* Category Filters */}
        <div className="hidden md:flex items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`h-8 px-4 text-xs font-medium rounded-sm transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-stone-800 text-white"
                  : "bg-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Category Filter */}
      <div className="md:hidden w-full overflow-x-auto flex items-center gap-2 px-4 py-3 border-b border-stone-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 h-7 px-3 text-xs font-medium rounded-sm transition-colors duration-200 ${
              activeCategory === cat
                ? "bg-stone-800 text-white"
                : "bg-stone-100 text-stone-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10">
        {filtered.length === 0 ? (
          <div className="w-full h-[300px] flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-2xl">
              📭
            </div>
            <p className="text-stone-500 text-lg font-serif">No posts found</p>
            <p className="text-stone-400 text-sm">Try a different search or category</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featured && (
              <div className="w-full mb-10">
                <div className="w-full h-8 flex items-center gap-3 mb-4">
                  <span className="text-xs tracking-[0.2em] text-stone-400 uppercase font-semibold">
                    Featured
                  </span>
                  <div className="flex-1 h-px bg-stone-200" />
                </div>
                <PostCard post={featured} featured={true} />
              </div>
            )}

            {/* Grid */}
            {rest.length > 0 && (
              <div>
                <div className="w-full h-8 flex items-center gap-3 mb-6">
                  <span className="text-xs tracking-[0.2em] text-stone-400 uppercase font-semibold">
                    Latest Posts
                  </span>
                  <div className="flex-1 h-px bg-stone-200" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
