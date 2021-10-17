import React from 'react';
import { Route, Switch } from "react-router-dom";
import Classes from './Layout.module.scss';
import Header from "./Header/Header";
import ProjectSlider from "./Sections/ProjectSlider/ProjectSlider";
import Footer from "./Footer/Footer";
import Hero from "./Sections/Hero/Hero";
import About from './Sections/About/About';
import Contact from './Sections/Contact/Contact';

function Layout() {
    return (
        <div className={Classes.layout}>
            <Route path="/">
        <Header />
        
      </Route>
        <Route path="/" exact>
          <Hero />
          <About/>
          <ProjectSlider />
          <Contact/>
          <Footer/>
        </Route>
        </div>
    )
}

export default Layout;
