import React, { useState } from "react";
import Button from "../../../UI/Button";
import classes from "./About.module.scss";
import Hover from "../../../UI/Hover";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

function About(props) {
  const aboutData = {
    skills: {
      LANGUAGES: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Html & Css",
        "C++(basic)",
      ],
      FRONTEND: ["React", "Redux", "Next.js", "Sass"],
      BACKEND: ["Firebase", "Node.js"],
      DESIGN: ["Figma", "Canva", "Adobe Xd"],
    },

    Education: [
      `Bachlor's of Engineering in Instrumentation Control`,
      `Master's Degree in Computer Application (Pursuing)`,
    ],
  };
 

  const [listData, setListData] = useState(0);

const skills = aboutData.skills;
const education = aboutData.Education;

const clickHandler = (aboutData) => {

    setListData(listData + 1 )
  

}
console.log(Object.keys(aboutData).length);

  return (
    <div className={`${classes.about} ${props.className}`}>
      <div className={classes["about-head"]}>
        <h1>About me</h1>
        <h3>
          Hi, I Design and Develop cool Websites & Apps. Do check-out my Project
          Section.
        </h3>
      </div>

      <div className={classes.container}>
        <div className={classes.rounder}>
          <h2>{Object.keys(aboutData)[listData]}</h2>
        </div>
        <div  className={classes.wrapper}>
        
                  {Object.keys(skills).map((item) => {
                    return (
                      <>
                      <div className={classes.textbox}>
                      <ul >
                      <li> {item} </li>
                      
                      {skills[item].map((data)=>{
                        return <ul className={classes.itemData}><li>{data}</li></ul>
                      })}
                      </ul>
                      </div>
                       </>
                    );
                  })}
               

         
        </div>
        <Button className={classes.upbutton} onClick={clickHandler} >
          <BsFillCaretUpFill />
        </Button>
        <Button className={classes.downbutton} onClick={clickHandler}>
          <BsFillCaretDownFill />
        </Button>
      </div>
      <Button className={classes.cvbutton}>Download CV</Button>
    </div>
  );
}

export default About;
