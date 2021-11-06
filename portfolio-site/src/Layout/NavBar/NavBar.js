import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBarData from "./NavBarData";
import classes from "./NavBar.module.scss";



function NavBar(props) {
  
  return (
    <>
    <div className={classes.backdrop} onClick={props.onClose}></div>
        <div className={classes.navbar}>
        <ul className={classes.navul} onClick={props.onClose}>
          {NavBarData.map((item, index) => {
            return (
              <Link to={item.path} >
                <li key={index} className={classes[`${item.cName}`]}  >
                  {item.icon}
                  <span>{item.title}</span>
                  </li>
              </Link>
            );
          })}
        </ul>
        </div>
  </>
  );
}

export default NavBar;
