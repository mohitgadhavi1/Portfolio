import React, { useState } from "react";
import "./ContactForm.scss";

export default function ContactForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    
    name = event.target.name;
    value = event.target.value;

    setUser({ [name]: value });
  };

  

  const sendData = async () => {
   /* const { name, email, mobileNumber, address, message } = user;
    const res = fetch(
      "https://my-portfolio-5169e-default-rtdb.asia-southeast1.firebasedatabase.app/contactForm.json",
      { method: "POST",
        header:{"content-type":"application/json"},
        body: JSON.stringify({ 
          name, email, mobileNumber, address, message
         }) }
    );*/
  };

  return (
    <form className="form_container" method="POST" >
      <label className="container_label left">
        Your Name:
        <br />
        <input
          name="name"
          value={user.name}
          onChange={getUserData}
          placeholder="Enter your Name"
          type="text"
          autoComplete="off"
          className="container_input "
        />
      </label>

      <label className="container_label left">
        E-mail:
        <br />
        <input
          name="email"
          value={user.email}
          onChange={getUserData}
          placeholder="abc@email.com"
          type="email"
          autoComplete="off"
          className="container_input "
        />
      </label>

      <label className="container_label left">
        Mobile No:
        <br />
        <input
          name="mobileNumber"
          value={user.mobileNumber}
          onChange={getUserData}
          placeholder="10 Digit Mobile Number"
          type="number"
          autoComplete="off"
          className="container_input  "
        />
      </label>

      <label className="container_label right">
        Address:
        <br />
        <input
          name="address"
          value={user.address}
          onChange={getUserData}
          placeholder="Your Current Address"
          type="text"
          autoComplete="off"
          className="container_input  "
        />
      </label>

      <label className="container_label  right ">
        Message:
        <br />
        <textarea
          name="message"
          value={user.message}
          onChange={getUserData}
          placeholder="Enter Your Message"
          type="text"
          autoComplete="off"
          className="container_input"
        />
      </label>

      <input
        className="container_button"
        type="button"
        value="submit"
        onClick={sendData}
      />
    </form>
  );
}
