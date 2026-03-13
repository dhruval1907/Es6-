import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const savedPosts = localStorage.getItem("blogPosts");

        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        } else {
            const demoPosts = [
                {
                    id: 1,
                    title: "My First Blog Post",
                    content: "This is my first blog post using React.",
                    author: "Dhruval",
                    date: "13 Mar 2026"
                },
                {
                    id: 2,
                    title: "Why Tailwind is Awesome",
                    content: "Tailwind CSS helps developers build UI faster.",
                    author: "Dhruval",
                    date: "12 Mar 2026"
                }
            ];

            setPosts(demoPosts);
            localStorage.setItem("blogPosts", JSON.stringify(demoPosts));
        }
    }, []);

    return (
        <div className="w-full min-h-screen flex justify-center mt-10">

            <div className="w-[1100px]">

                <h1 className="text-4xl font-bold text-center h-[80px]">
                    All Blog Posts
                </h1>

                <div className="grid grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

            </div>

        </div>
    );
}