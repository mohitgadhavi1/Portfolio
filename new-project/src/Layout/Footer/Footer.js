import React from 'react';
import classes from './Footer.module.scss'

function Footer() {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className={classes.footer}>
           <h3>©{year} Mohit Gadhavi. All Rights Reserved.</h3> 
        </div>
    )
}

export default Footer;
