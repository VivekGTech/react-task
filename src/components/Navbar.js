import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}

export default Navbar;
