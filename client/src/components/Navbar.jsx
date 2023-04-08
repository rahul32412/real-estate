import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { navContext } from "../contexts/nav-context";
import { FaGripLines, FaCross } from "react-icons/fa";
function navbar() {
  const [nav, setnav] = useState(false);
  const handleToggle = () => {
    if (nav) {
      return setnav(false);
    }
    setnav(true);
  };
  const { navBg } = useContext(navContext);
  return (
    <>
      <div
        className="nav-wrapper"
        style={{ backgroundColor: navBg ? "var(--primary)" : "transparent" }}
      >
        <nav>
          <div className="logo">
            <h3>Pushkraj Estate</h3>
          </div>

          <div className={"links" + (nav ? " open" : "")}>
            <ul className="nav-links">
              <li>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to={"/properties"}>
                  <span>Properties</span>
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="nav-toggler">
            <button onClick={handleToggle}>
              {nav ? <FaCross /> : <FaGripLines />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default navbar;
