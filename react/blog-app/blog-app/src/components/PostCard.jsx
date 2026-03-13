import { Link } from "react-router-dom";

export default function PostCard({ post, featured = false }) {
  if (featured) {
    return (
      <Link to={`/post/${post.id}`} className="no-underline group block">
        <div className="w-full flex flex-col md:flex-row gap-0 border border-stone-200 hover:border-stone-400 transition-all duration-300 bg-white overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-[55%] h-[280px] md:h-[400px] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-[45%] h-auto md:h-[400px] flex flex-col justify-between p-8 bg-white">
            <div>
              <div className="w-full h-8 flex items-center gap-3 mb-4">
                <span className="h-5 px-2 bg-amber-100 text-amber-700 text-xs font-semibold rounded-sm flex items-center uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-stone-400 text-xs">{post.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 leading-tight mb-4 group-hover:text-amber-700 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="w-full h-12 flex items-center justify-between border-t border-stone-100 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 text-xs font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-700">{post.author}</p>
                  <p className="text-xs text-stone-400">{post.date}</p>
                </div>
              </div>
              <span className="text-amber-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                Read →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.id}`} className="no-underline group block">
      <div className="w-full h-full flex flex-col border border-stone-200 hover:border-stone-400 transition-all duration-300 bg-white overflow-hidden hover:shadow-md">
        {/* Image */}
        <div className="w-full h-[200px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <div className="w-full h-7 flex items-center gap-2 mb-3">
            <span className="h-5 px-2 bg-amber-100 text-amber-700 text-xs font-semibold rounded-sm flex items-center uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-stone-400 text-xs">{post.readTime}</span>
          </div>

          <h3 className="text-lg font-serif font-bold text-stone-900 leading-tight mb-2 group-hover:text-amber-700 transition-colors duration-200">
            {post.title}
          </h3>

          <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          <div className="w-full h-10 flex items-center justify-between border-t border-stone-100 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 text-xs font-bold">
                {post.author.charAt(0)}
              </div>
              <p className="text-xs text-stone-500">{post.author}</p>
            </div>
            <p className="text-xs text-stone-400">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
