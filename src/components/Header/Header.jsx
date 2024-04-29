import { useState } from "react";
import "./Header.css";
import { getImageURL } from "../../../utils/functions";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <a className="navbar-brand" href="#">
          <img className="mb-3" src={getImageURL("logo.png")} alt="Logo" width={80} />
        </a>
        <div className="w-100">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                  onClick={() => handleLinkClick("home")}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "principles" ? "active" : ""}`}
                  onClick={() => handleLinkClick("principles")}
                  href="#"
                >
                  Principles
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "about-us" ? "active" : ""}`}
                  onClick={() => handleLinkClick("about-us")}
                  href="#"
                >
                  About Us
                </a>
              </li>
              <a
                className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("contact")}
                href="#"
              >
                Contact
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
