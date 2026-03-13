import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;