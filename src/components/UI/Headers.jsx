import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <button className="menu-toggle" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
            ☰
          </button>

          <nav className={`main-nav ${isOpen ? "open" : ""}`}>
            <ul>
              <li className="nav-link">
                <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/country" onClick={() => setIsOpen(false)}>Country</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
