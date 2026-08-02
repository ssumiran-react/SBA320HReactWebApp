import { Link } from "react-router-dom";

export default function Header() {

  return (
    <>
      <nav className="navbar" aria-label="Main Navigation" role="navigation">
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/"><div>Home</div></Link>
            </li>
            <li className="nav-item">
              <Link to="/About"><div>About</div></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}