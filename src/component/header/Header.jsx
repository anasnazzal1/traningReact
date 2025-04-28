import { Link } from "react-router-dom";
import style from "./header.module.css"
function Header(){
    return(
     
<header className={style.header}> 
  <h2>Start Bootstrap</h2>
  <nav className="nav-heaer">
    <Link to={'/Portfolio'}>Portfolio</Link>
    <Link to={'/about'}>about</Link>
    <Link to={'/contact'}>contact</Link>
  </nav>
</header>

    )
}

export default Header;