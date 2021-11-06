import React from "react";
import classes from "./ProjectSlider.module.scss";
import { Link } from "react-router-dom";
import ProjectData from '../../../ProjectArea/ProjectsData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSlider = (props) => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <div className={`${classes.projectSection} ${props.className}`}>
        <h1>Projects</h1>
      <div className={classes["slider_container"]}>
        <Slider {...settings}>
          {ProjectData.map((item, index) => {
      
            return (
              <div
                className={classes[`${item.cName}`]}
                key={index}
              >
                <Link to={item.path()}>
               <img className={classes['card_img']} src={item.image} alt={item.title} />
               </Link>
              </div>
            );
          })}
        </Slider>
      </div>
      </div>
    );
  }

export default ProjectSlider;
