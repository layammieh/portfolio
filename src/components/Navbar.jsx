import '../index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">GL<span>.</span></a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#hero" className="nav-link">Hero</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
