import { Link} from "react-router-dom";

export default function Nav() {

  return (
    <nav>
      <div className="page-boundary nav-box">
        <div className="nav-side-l">
          <Link to="/">
          <h1 className="nav-logo">Megan Paffrath</h1>
          </Link>
        </div>
        <div className="nav-side-r">
          <h1 className="nav-links"><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ghc4nvZRyzRRUuxYSLv2bi543ddKw2nF/view">Resume</a></h1>
        </div>
      

      </div>
    </nav>
  );
}
