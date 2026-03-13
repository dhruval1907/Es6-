import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
    const foundPost = savedPosts.find(p => p.id === Number(id))
    if (foundPost) setPost(foundPost)
    else navigate('/posts')
  }, [id, navigate])

  if (!post) return <p className="text-center py-20">Loading...</p>

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/posts" className="text-indigo-600 mb-6 inline-block">← Back to all posts</Link>
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 mb-8">
        By {post.author} • {post.date}
      </div>
      
      <div className="prose max-w-none text-lg leading-relaxed">
        {post.content}
      </div>
    </div>
  )
}