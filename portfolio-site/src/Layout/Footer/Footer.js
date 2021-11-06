import React from 'react';
import classes from './Footer.module.scss';
import {FaGithub,FaLinkedin,FaYoutube} from 'react-icons/fa';

function Footer() {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className={classes.footer}>
           <h3>©{year} Mohit Gadhavi. All Rights Reserved.</h3> 
           <div className={classes.socials}>
               <span><a href="github"><FaGithub/></a></span>
               <span><a href="instagram"><FaLinkedin/></a></span>
               <span><a href="youtube"><FaYoutube/></a></span>
           </div>
        </div>
    )
}

export default Footer;
