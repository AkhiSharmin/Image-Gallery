import "./Navbar.css";
import { FaTrash } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-item">
        <li className="nav-link nav-link__1">Gallery</li>
        <li className="nav-link nav-link__2">
          <FaTrash /> Delete Files
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
