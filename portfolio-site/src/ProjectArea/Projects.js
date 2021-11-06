import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Watsapp from "./Projects/Watsapp/Watsapp";
import Getsby from "./Projects/Getsby/Getsby";
import Netflix from "./Projects/NetFlix/Netflix";

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
      <Route path="/projects/Netflix" exact>
        <Netflix />
      </Route>
      </Switch>
    </>
  );
}
export default Projects;
