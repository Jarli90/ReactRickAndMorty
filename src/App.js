import React from "react";
import styles from "./App.module.css";
import Logo from "./assets/RickAndMortyLogo.png"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainView from "./views/MainView";
import ProfileView from "./views/ProfileView"


export default function App() {
  return (
    <Router>
      <div className={styles.fill}>
        <header className={styles.header}>
          <img src={Logo} alt="missing"></img>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={MainView}>
          </Route>
          <Route path="/profile" component={ProfileView}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

