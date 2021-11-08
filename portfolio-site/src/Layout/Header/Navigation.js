import React from "react";
import { BsDiamondHalf } from "react-icons/bs";
import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {/* {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )} */}
        <li>
          <button className={classes[`theme-Btn`]}>{BsDiamondHalf}</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
