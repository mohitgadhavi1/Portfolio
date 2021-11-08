import React, { useState } from "react";
import classes from "./ContactForm.module.scss";
import Button from "../../UI/Button";

export default function ContactForm() {
  const [className, setClassName] = useState("");

  const clickHandler = () => {
    setClassName(classes.labelModifier);
  };

  return (
    <form className={classes["form_container"]}>
      <div className={classes["form_input"]}>
        <input
          name="name"
          type="text"
          onClick={clickHandler}
          className={classes["form_input_field"]}
          required=""
        />
        <label className={`${classes["form_input_label"]} ${className}`}>
          Name:
        </label>
      </div>
      <div className={classes["form_input"]}>
        <label className={`${classes["form_input_label"]} ${className}`}>
          E-Mail:
        </label>
        <input
          type="email"
          onClick={clickHandler}
          className={classes["form_input_field"]}
          required=""
        />
      </div>
      <div className={classes["form_input"]}>
        <label className={`${classes["form_input_label"]} ${className}`}>
          Contact:
        </label>
        <input
          type="tel"
          onClick={clickHandler}
          className={classes["form_input_field"]}
          required=""
        />
      </div>
      <div className={classes["form_input"]}>
        <label className={`${classes["form_input_label"]} ${className}`}>
          Subject:
        </label>
        <input
          type="text"
          onClick={clickHandler}
          className={classes["form_input_field"]}
          required=""
        />
      </div>
      <div className={classes["form_input"]}>
        <label className={`${classes["form_input_label"]} ${className}`}>
          Message:
        </label>
        <input
          type="text"
          onClick={clickHandler}
          className={classes["form_input_field"]}
          required=""
        />
      </div>

      <Button className={classes["form_submit_button"]} type="submit">
        Submit
      </Button>
    </form>
  );
}
