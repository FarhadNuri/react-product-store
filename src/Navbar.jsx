import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="flex items-center justify-around">
        <p>Logo</p>
    
      <nav className="flex gap-10 justify-center p-5">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>

      </nav>
      <button>Login</button>
      </div>
    </>
  );
}
export default Navbar;
