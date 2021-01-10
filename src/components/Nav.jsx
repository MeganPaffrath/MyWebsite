import { Link, Route} from "react-router-dom";
import style from "./nav.css";

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
        <li><a target="_blank" href="https://drive.google.com/file/d/1ghc4nvZRyzRRUuxYSLv2bi543ddKw2nF/view">Resume</a></li>
        
      </ul>
    </nav>
  );
}
