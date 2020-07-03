import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Commands from "./components/Commands/Commands";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/commands" component={Commands} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
