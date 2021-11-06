import React from "react";
import classes from './Ui.module.scss'

const Hover = (props) => (
    <div className={classes["hover"]}>
        <div className={`classes["hover__no-hover"] ${props.className}`}>{props.children}</div>
        <div className={`classes["hover__hover"] ${props.className}`}>{props.onHover}</div>
    </div>
)

export default Hover;