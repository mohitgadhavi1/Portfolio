import React from 'react';
import ContactForm from "../../../Components/ContactForm/ContactForm";
import classes from './Contact.module.scss'

function Contact() {
    return (
        <div className={classes['contact-section']}>
            <h1>Contact</h1>
            <ContactForm/>
        </div>
    )
}

export default Contact
