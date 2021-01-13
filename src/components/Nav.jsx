import { Link} from "react-router-dom";

export default function Nav() {
  const styles = {

  }

  return (
    <nav>
      <div class="page-boundary nav-box">
        <div class="nav-side-l">
          <Link to="/">
          <h1 class="nav-logo">Megan Paffrath</h1>
          </Link>
        </div>
        <div class="nav-side-r">
          <h1 class="nav-links"><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ghc4nvZRyzRRUuxYSLv2bi543ddKw2nF/view">Resume</a></h1>
        </div>
      

        
        
      
      
{/* 

        <h1>Megan Paffrath</h1>
        <h2>Resume</h2>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/education">
            <li>Education</li>
          </Link>
          <li></li>
          
        </ul> */}
      </div>
    </nav>
  );
}
