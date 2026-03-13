import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-indigo-600">MyBlog</Link>
                <div className="space-x-6">
                    <Link to="/" className="hover:text-indigo-600">Home</Link>
                    <Link to="/posts" className="hover:text-indigo-600">All Posts</Link>
                    <Link to="/create" className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
                        + New Post
                    </Link>
                </div>
            </div>
        </nav>
    )
}