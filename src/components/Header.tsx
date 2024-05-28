import "./menu.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-img" src="/images/walt.png" alt="aaa" />
        <p>
          The portfolio of <strong>Walter Lim</strong>
        </p>
      </a>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/media">Media</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div id="menuToggle">
        <input type="checkbox" id="navtoggle" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a className="main-nav-logo" href="/">
            <img
              className="main-nav-logo-img"
              src="/images/walt.png"
              alt="aaa"
            />
            <p>
              The portfolio of <strong>Walter Lim</strong>
            </p>
          </a>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/work">
            <li>Work</li>
          </Link>
          <Link to="/media">
            <li>Media</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
