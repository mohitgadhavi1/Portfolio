import React,{useState} from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import Navigation from './Navigation';
import LogoIcon from "../../UI/icons/LogoIcon";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import NavBar from "../NavBar/NavBar";

export default function Header(props) {

  const [sidebar, setSidebar] = useState(false);


  const navbarHandler = () => {
    
    setSidebar(!sidebar);
  };

 return (


    <header className={classes.header}>
 
      <IconContext.Provider
        value={{ color: "$secondary_dark", className: `${classes.hamburger}` }}
      >
        {sidebar  ? (
           <AiOutlineClose onClick={navbarHandler} />
        ) : (
          <GiHamburgerMenu onClick={navbarHandler} />
        )}
      </IconContext.Provider>

      {sidebar && <NavBar onClose={navbarHandler}/>}

<Link to='/'>
  <div className={classes.logo}>
    <LogoIcon />
    </div>
    </Link>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
    
  );
}

/*    
<svg
xmlns="http://www.w3.org/2000/svg"
height="36px"
viewBox="0 0 24 24"
width="36px"
fill="var(--secondary_dark)"
>
<path d="M0 0h24v24H0z" fill="none" />
<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
</svg>
 */
