import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import Auth from "./Components/Auth/Auth";
import Projects from "./ProjectArea/Projects";
import "./App.scss";

function App(props) {
  return (
    <React.Fragment>
      <Layout />
        <Switch>
        <Route path="/auth" exact>
          <Auth />
        </Route>  
      </Switch>
    
      <Projects />
    </React.Fragment>
  );
}

export default App;
// https://medium.com/swlh/flutter-vs-native-vs-react-native-examining-performance-31338f081980
