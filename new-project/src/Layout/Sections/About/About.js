import React from "react";
import Button from "../../../UI/Button";
import classes from "./About.module.scss";

function About() {
    const skills = {
        'Languages':['JavaScript','TypeScript','Python','Html & Css','C++(basic)'],
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
           <Button>Download CV</Button>
        </div>

      <div className={classes.container}>
          <div className={classes.rounder}>
        <h2>Skills </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
