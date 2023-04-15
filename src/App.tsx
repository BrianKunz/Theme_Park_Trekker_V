import "./App.css";
import TripList from "./components/Trip/TripList";
import PostList from "./components/Post/PostList";
// import CommentList from "./components/Comment/CommentList";

function App() {
  return (
    <div className="App">
      <TripList />;
      <PostList />;
    </div>
  );
}

export default App;
