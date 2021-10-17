import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Watsapp from "./Projects/Watsapp/Watsapp";
import Getsby from "./Projects/Getsby/Getsby";

function Projects() {
  return (
    <>
    <Switch>
      <Route path="/projects/Watsapp" exact>
        <Watsapp />
      </Route>
      <Route path="/projects/Getsby" exact>
        <Getsby />
      </Route>
      </Switch>
    </>
  );
}
export default Projects;
