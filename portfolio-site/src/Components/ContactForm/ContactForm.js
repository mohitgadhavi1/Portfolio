import React from "react";
import classes from "./ContactForm.module.scss";
import Button from "../../UI/Button";
export default function ContactForm() {


  return (
    <form className={classes["form_container"]}  >
      <div className={classes["form_input"]}>
      
      <input
          name="name"
         
          type="text"
          className={classes["form_input_field"]}
          required=""
        />
        <label className={classes["form_input_label"]}>
        Name:
      </label>
      </div>
      <div className={classes["form_input"]}>
      <label className={classes["form_input_label"]}>
        E-Mail:
      </label>
      <input
         
          type="email"
          className={classes["form_input_field"]}
          required=""
        />
      </div>
      <div className={classes["form_input"]}>
      <label className={classes["form_input_label"]}>
        Contact:
      </label>
      <input
         
          type="tel"
          className={classes["form_input_field"]}
          required=""
        />
      </div>
      <div className={classes["form_input"]}>
      <label className={classes["form_input_label"]}>
        Subject:
      </label>
      <input
         
          type="text"
          className={classes["form_input_field"]}
          required=""
        />
      </div>
      <div className={classes["form_input"]}>
      <label className={classes["form_input_label"]}>
        Message:
      </label>
      <input
         
          type="text"
          className={classes["form_input_field"]}
          required=""
        />
      </div>
   


      <Button
        className={classes["form_submit_button"]}
        type="submit" >
          Submit    
      </Button>
    </form>
  );
}
