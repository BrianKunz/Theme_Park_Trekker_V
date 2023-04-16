import "./App.css";
// import TripList from "./components/Trip/TripList";
// import PostList from "./components/Post/PostList";
import CreateUser from "./components/User/CreateUser/CreateUser";
import LoginUser from "./components/User/LoginUser/LoginUser";

// import CommentList from "./components/Comment/CommentList";

function App() {
  return (
    <div className="App">
      {/* <TripList />
      <PostList /> */}
      <CreateUser />
      <LoginUser />
    </div>
  );
}

export default App;
