import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { People } from "./components/People/People";
import { Jobs } from "./components/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <header className="App-header">torre</header>

      <Router>
        <SideBar />

        <Switch>
          <Route path="/people" component={People} />
          <Route path="/jobs" component={Jobs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
