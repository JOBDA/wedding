import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <Link href="/">
          <a className="logo">Logo</a>
        </Link>
        <button className="hamburger" onClick={toggleMobileMenu}>
          <span
            className={`hamburger-icon ${isMobileMenuOpen ? "active" : ""}`}
          />
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
