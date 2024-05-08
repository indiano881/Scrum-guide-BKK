import { useState } from "react";
import "./Header.css";
import { getImageURL } from "../../utils/functions";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header id="sticky-navbar" className="header-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="logo-and-title">
          <a className="navbar-brand" href="#">
            <img className="logo-img" src={getImageURL("logo.png")} alt="Logo" width={80} />
          </a>
          <h1>Scrum Guide</h1>
        </div>
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
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "principles" ? "active" : ""}`}
                  onClick={() => handleLinkClick("principles")}
                  href="#six-principle"
                >
                  Principles
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "about-us" ? "active" : ""}`}
                  onClick={() => handleLinkClick("about-us")}
                  href="#about-us"
                >
                  About Us
                </a>
              </li>
              <a
                className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("contact")}
                href="#contact"
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
