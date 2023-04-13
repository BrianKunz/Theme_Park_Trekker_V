import React, { useEffect } from "react";
import { usePostStore } from "../../stores/usePostStore";
import { Post } from "./Post";
import CreatePost from "./CreatePost/CreatePost";

export default function PostList() {
  const { posts, getAllPosts } = usePostStore();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <CreatePost />
      {posts.map((post) => {
        return <Post key={Post.id} post={post} />;
      })}
    </div>
  );
}
