import { BrowserRouter, Route, Routes } from "react-router-dom";
import TripList from "./components/Trip/TripList";
import PostList from "./components/Post/PostList";
import CreateUser from "./components/User/CreateUser/CreateUser";
import LoginUser from "./components/User/LoginUser/LoginUser";
import { Post } from "./components/Post/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/trips" Component={TripList} />
          <Route path="/posts" Component={PostList} />
          {/* <Route path="/posts/:id" Component={Post} /> */}
          <Route path="/signup" Component={CreateUser} />
          <Route path="/login" Component={LoginUser} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
