import { Link} from "react-router-dom";

export default function Nav() {

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/education">
          <li>Education</li>
        </Link>
        <li><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ghc4nvZRyzRRUuxYSLv2bi543ddKw2nF/view">Resume</a></li>
        
      </ul>
    </nav>
  );
}
