import React from "react";
import Button from "../../../UI/Button";
import classes from "./About.module.scss";

function About() {
    const skills = {
        Languages:['JavaScript','TypeScript','Python','Html & Css','C++(basic)'],
        'Font-End':[ 'React', 'Redux', 'Next.js', 'Saas'],
        'Back-End':['Firebase','Node.js'],
        'Design':['Figma','Canva','Adobe Xd']
    }

    const education =[`Bachlor's of Engineering in Instrumentation Control`,
                      `Master's Degree in Computer Application (Pursuing)`]

  return (
    <div className={classes.about}>
        <div className={classes['about-head']}>
          <h1>About me</h1>
           <h3>
            Hi, I Design and Develop cool Websites & Apps. Do check-out my Project
            Section.
           </h3>
         
        </div>

      <div className={classes.container}>
          <div className={classes.rounder}>
        <h2>Skills </h2>
        </div>
        <div className={classes.textbox}>

          <h2>{Object.keys(skills)[0]}:</h2>
          <ul>
          
            {skills.Languages.map((item) =>{
               return <li> {item}   </li>
            })}
          
          </ul>
         
        </div>
        <Button className={classes.upbutton}>up</Button>
        <Button className={classes.downbutton}>down</Button>
      </div>
      <Button className={classes.cvbutton}>Download CV</Button>
    </div>
  );
}

export default About;
