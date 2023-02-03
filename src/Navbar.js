import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Blogify</h1>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/create">New Blog</Link>
        <Link to="/account">My Account</Link>
        <Link to="/info">Info</Link>
      </div>
    </nav>
  );
};

export default Navbar;
