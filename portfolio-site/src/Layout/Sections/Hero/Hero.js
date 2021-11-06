import React from 'react';
import classes from "./Hero.module.scss";
import Button from '../../../UI/Button';
import HeroFrontImage from '../../../Components/assets/heroImage.png';
import {FaGithub,FaLinkedin,FaYoutube} from 'react-icons/fa';

function Hero(props) {
    return (
        <>
        <div className={`${classes.hero} ${props.className}`}>
        <div className={classes.heroSocials}>
               <span><a href="github"><FaGithub/></a></span>
               <span><a href="instagram"><FaLinkedin/></a></span>
               <span><a href="youtube"><FaYoutube/></a></span>
           </div>
            <div className={classes['hero-text']}>
        
            <h1>Mohit Gadhavi</h1>
            <p>Front-End Engineer</p>
            
            <Button>Contact me</Button>
            </div>
            <div className={classes.imgContainer}>
       <img src={HeroFrontImage} alt="hero_image_code" />
       </div>
       </div>
        </>
    )
}

export default Hero;
