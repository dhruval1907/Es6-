import { useParams, Link, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="w-full h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-stone-500 text-xl font-serif">Post not found</p>
        <Link to="/" className="h-10 px-6 bg-stone-800 text-white text-sm rounded-sm flex items-center no-underline">
          Back to Home
        </Link>
      </div>
    );
  }

  // Related posts
  const related = posts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2);

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <main className="w-full min-h-screen bg-[#faf9f6]">
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[520px] relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 h-9 px-4 bg-white/20 backdrop-blur-sm text-white text-sm rounded-sm flex items-center gap-2 hover:bg-white/30 transition-colors"
        >
          ← Back
        </button>

        {/* Post Meta */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-10">
          <div className="w-full max-w-3xl">
            <div className="w-full h-7 flex items-center gap-3 mb-4">
              <span className="h-6 px-3 bg-amber-500 text-white text-xs font-bold rounded-sm flex items-center uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-white/70 text-xs">{post.readTime}</span>
            </div>
            <h1 className="text-white font-serif text-3xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Layout */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <article className="w-full lg:w-[65%]">
          {/* Author Bar */}
          <div className="w-full h-16 flex items-center gap-4 border-b border-stone-200 mb-8">
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-sm">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-800">{post.author}</p>
              <p className="text-xs text-stone-400">{post.date}</p>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-stone-600 font-serif leading-relaxed border-l-4 border-amber-400 pl-5 mb-8 italic">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose-custom">
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h3 key={i} className="text-xl font-serif font-bold text-stone-900 mt-8 mb-3">
                    {para.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              // Inline bold
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-stone-600 text-base leading-[1.9] mb-5">
                  {parts.map((part, j) =>
                    part.startsWith("**") ? (
                      <strong key={j} className="font-semibold text-stone-800">
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : part.startsWith("*") && part.endsWith("*") ? (
                      <em key={j}>{part.replace(/\*/g, "")}</em>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="w-full flex items-center gap-2 flex-wrap mt-10 pt-6 border-t border-stone-200">
            <span className="text-xs text-stone-400 font-medium">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="h-7 px-3 bg-stone-100 text-stone-600 text-xs rounded-sm flex items-center"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-[35%]">
          {/* About Author */}
          <div className="w-full border border-stone-200 bg-white p-6 mb-6">
            <h4 className="text-sm font-bold text-stone-800 uppercase tracking-wider mb-4">
              About the Author
            </h4>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-stone-800">{post.author}</p>
                <p className="text-xs text-stone-400">{post.category} Writer</p>
              </div>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              A passionate writer covering {post.category.toLowerCase()} topics with deep expertise and curiosity.
            </p>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="w-full border border-stone-200 bg-white p-6">
              <h4 className="text-sm font-bold text-stone-800 uppercase tracking-wider mb-4">
                Related Posts
              </h4>
              <div className="flex flex-col gap-4">
                {related.map((p) => (
                  <Link key={p.id} to={`/post/${p.id}`} className="no-underline group flex gap-3">
                    <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded-sm">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="text-sm font-serif font-semibold text-stone-800 leading-tight group-hover:text-amber-700 transition-colors line-clamp-2">
                        {p.title}
                      </p>
                      <p className="text-xs text-stone-400 mt-1">{p.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
