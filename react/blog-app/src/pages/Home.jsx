import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold mb-6">Welcome to MyBlog</h1>
      <p className="text-xl text-gray-600 mb-10">Share your thoughts with the world</p>
      <div className="space-x-4">
        <Link to="/posts" className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-indigo-700">
          Browse All Posts
        </Link>
        <Link to="/create" className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl text-lg hover:bg-indigo-50">
          Write a New Post
        </Link>
      </div>
    </div>
  )
}