import React from 'react';
import classes from './Archive.module.scss'

function Archive() {
const year= new Date().getFullYear();
const month =new Date().getMonth();
const day = new Date().getUTCDate();

    return (
        <div className={classes.postContainer}>
            <h1>post #1</h1>
            <p>'~' or '+' Selector is not working in 'module.scss'.Will try with .scss and last .css</p>
            <p>posted on:{` ${day}/${month}/${year}`}</p>
        </div>
    )
}

export default Archive;
