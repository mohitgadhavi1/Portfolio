import React from 'react';
import ContactForm from "../../../Components/ContactForm/ContactForm";
import classes from './Contact.module.scss'

function Contact(props) {
    return (
        <div className={`${classes['contact-section']}  ${props.className}`}>
            <h1>Contact</h1>
            <ContactForm/>
        </div>
    )
}

export default Contact
