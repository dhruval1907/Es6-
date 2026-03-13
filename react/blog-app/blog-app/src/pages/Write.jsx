import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/posts";

export default function Write() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "Travel",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  const cats = categories.filter((c) => c !== "All");

  if (submitted) {
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
          ✓
        </div>
        <h2 className="text-2xl font-serif font-bold text-stone-800">Post Submitted!</h2>
        <p className="text-stone-500 text-sm">Redirecting you home...</p>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#faf9f6]">
      {/* Header */}
      <div className="w-full h-[100px] bg-stone-900 flex flex-col items-center justify-center">
        <h1 className="text-white font-serif text-3xl font-bold">Write a New Post</h1>
        <p className="text-stone-400 text-sm mt-1">Share your ideas with the world</p>
      </div>

      {/* Form */}
      <div className="w-full max-w-3xl mx-auto px-6 py-12">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* Title */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
              Post Title *
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Enter a compelling title..."
              className="w-full h-12 px-4 border border-stone-200 bg-white text-stone-800 text-base outline-none focus:border-amber-400 transition-colors rounded-sm"
            />
          </div>

          {/* Author + Category Row */}
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col gap-2">
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Author Name *
              </label>
              <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full h-12 px-4 border border-stone-200 bg-white text-stone-800 text-sm outline-none focus:border-amber-400 transition-colors rounded-sm"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Category *
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full h-12 px-4 border border-stone-200 bg-white text-stone-800 text-sm outline-none focus:border-amber-400 transition-colors rounded-sm appearance-none"
              >
                {cats.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Excerpt */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
              Excerpt / Summary *
            </label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              required
              rows={3}
              placeholder="A brief summary of your post (shown on the home page)..."
              className="w-full px-4 py-3 border border-stone-200 bg-white text-stone-800 text-sm outline-none focus:border-amber-400 transition-colors rounded-sm resize-none leading-relaxed"
            />
          </div>

          {/* Content */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
              Full Content *
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              required
              rows={14}
              placeholder="Write your full post content here. Use **bold** for headings, and separate paragraphs with blank lines..."
              className="w-full px-4 py-3 border border-stone-200 bg-white text-stone-800 text-sm outline-none focus:border-amber-400 transition-colors rounded-sm resize-none leading-relaxed"
            />
            <p className="text-xs text-stone-400">
              Tip: Use **text** for bold headings. Separate paragraphs with blank lines.
            </p>
          </div>

          {/* Word Count */}
          <div className="w-full h-8 flex items-center justify-between">
            <span className="text-xs text-stone-400">
              {form.content.trim() ? form.content.trim().split(/\s+/).length : 0} words
            </span>
            <span className="text-xs text-stone-400">
              Estimated read time: ~{Math.max(1, Math.ceil((form.content.trim().split(/\s+/).length || 0) / 200))} min
            </span>
          </div>

          {/* Submit */}
          <div className="w-full flex items-center gap-4">
            <button
              type="submit"
              className="h-12 px-8 bg-stone-800 text-white text-sm font-semibold rounded-sm hover:bg-amber-600 transition-colors duration-200"
            >
              Publish Post →
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="h-12 px-6 text-stone-500 text-sm hover:text-stone-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
