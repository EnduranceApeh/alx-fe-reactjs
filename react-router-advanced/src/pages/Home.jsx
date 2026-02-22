import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <Link to="/profile">Go to Profile</Link>
      <br />
      <Link to="/blog/1">Open Blog Post 1</Link>
    </div>
  );
}

export default Home;