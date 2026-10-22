import React from "react";
import PostInput from "../sub-components/PostInput";
import Post from "../sub-components/Post";

export default function MainContent() {
  return (
    <div className="flex-1 border border-gray-400 bg-gray-100 m-4 rounded-xl h-999 ">
      <h1 className="sticky top-0 z-50 bg-white/60 backdrop-blur-xs p-6 rounded-xl font-bold">Home</h1>
      <PostInput />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
