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

    Education: {
      Degree: [
        `Bachlor's of Engineering in Instrumentation Control`,
        `Master's Degree in Computer Application (Pursuing)`,
      ],
    },
  };

  const [counter, setCounter] = useState(0);

  const skills = aboutData.skills;
  const Education = aboutData.Education;

  // for (let i = 0; i < Object.keys(aboutData).length; i++) {
  //   console.log(i);
  // }
  const clickHandler = () => {
    if (counter < Object.keys(aboutData).length - 1) {
      setCounter(counter + 1);
    } else if (counter >= Object.keys(aboutData).length - 1) {
      setCounter(0);
    }
  };
  console.log(aboutData[0]);
  // console.log(Object.keys(aboutData).length - 1);

  return (
    <div className={`${classes.about} ${props.className}`}>
      <div className={classes["about-head"]}>
        <h1>About me</h1>
      </div>

      <div className={classes.container}>
        <div className={classes.rounder}>
          <h2>{Object.keys(aboutData)[counter]}</h2>
        </div>
        <div className={classes.wrapper}>
          {Object.keys(skills).map((item) => {
            return (
              <>
                <div className={classes.textbox}>
                  <ul>
                    <li> {item} </li>

                    {skills[item].map((data) => {
                      return (
                        <ul className={classes.itemData}>
                          <li>{data}</li>
                        </ul>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
        <Button className={classes.upbutton} onClick={clickHandler}>
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
