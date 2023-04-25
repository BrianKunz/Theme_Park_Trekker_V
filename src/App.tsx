import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TripList from "./components/Trip/TripList";
import PostList from "./components/Post/PostList";
import CreateUser from "./components/User/CreateUser/CreateUser";
import LoginUser from "./components/User/LoginUser/LoginUser";
import Post from "./components/Post/Post";
import HomePage from "./components/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips" element={<TripList />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/signup" element={<CreateUser />} />
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
