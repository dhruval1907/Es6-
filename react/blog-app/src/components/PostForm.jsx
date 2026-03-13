import { useState } from 'react'

export default function PostForm({ onSubmit }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !content || !author) return alert('All fields are required!')

        onSubmit({
            id: Date.now(),
            title,
            content,
            author,
            date: new Date().toLocaleDateString('en-IN')
        })

        setTitle('')
        setContent('')
        setAuthor('')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500"
                required
            />
            <textarea
                placeholder="Write your blog content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="8"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500"
                required
            />
            <input
                type="text"
                placeholder="Your Name (Author)"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500"
                required
            />
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700"
            >
                Publish Post
            </button>
        </form>
    )
}