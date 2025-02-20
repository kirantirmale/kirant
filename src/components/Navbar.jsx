import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(!nav);
  
  document.querySelectorAll('.navbar__links a').forEach(link => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.navbar__links a').forEach(el => el.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
  return (
    <>
    <section className="main-sec">

    <div className="container">
      <nav className="nav">
        {/* Mobile Navbar */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <FiX />
          </div>
          <ul className="mobile-navbar__links">
            <li><Link onClick={openNav} to="/">Home</Link></li>
            <li><Link onClick={openNav} to="/services">Our Services</Link></li>
            <li><Link onClick={openNav} to="/contact">Contact</Link></li>
            <li><Link onClick={openNav} to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Desktop Navbar */}
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/">
              <span className="kt">Kiran.<span className="t">T</span></span>
            </Link>
          </div>
          <ul className="navbar__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__contact" to="/contact">
              Contact
            </Link>
          </div>
          <div className="mobile-hamb" onClick={openNav}>
            <FiMenu />
          </div>
        </div>
      </nav>
    </div>
    </section>
    </>
  );
}

export default Navbar;
