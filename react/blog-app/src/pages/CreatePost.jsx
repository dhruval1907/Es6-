import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'

export default function CreatePost() {
  const navigate = useNavigate()

  const handleNewPost = (newPost) => {
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
    const updatedPosts = [newPost, ...existingPosts]
    
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
    alert('Post published successfully!')
    navigate('/posts')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Create New Post</h1>
      <PostForm onSubmit={handleNewPost} />
    </div>
  )
}