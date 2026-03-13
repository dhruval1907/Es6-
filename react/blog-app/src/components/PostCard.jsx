import { Link } from "react-router-dom";
// import PostCard from "../components/PostCard";
// import { Link } from "react-router-dom";


export default function PostCard({ post }) {
    return (
        <div className="bg-white rounded-xl shadow-lg w-full min-h-[220px] flex flex-col justify-between p-6">

            <div>
                <h2 className="text-xl font-semibold h-[40px] overflow-hidden">
                    {post.title}
                </h2>

                <p className="text-gray-600 h-[80px] overflow-hidden mt-2">
                    {post.content}
                </p>
            </div>

            <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                </div>

                <Link
                    to={`/post/${post.id}`}
                    className="block mt-3 text-indigo-600 font-medium"
                >
                    Read Full Post →
                </Link>
            </div>

        </div>
    );
}