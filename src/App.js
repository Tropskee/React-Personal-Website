import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollTop from "./Components/scrollTop";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/navbar";
import Footer from "./Components/footer";
import Home from "./Pages/home";
import About from "./Pages/about";
import Resume from "./Pages/resume";
import Portfolio from "./Pages/portfolio";
import Calculator from "./Components/Calculator/Calculator";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/calculator" exact component={Calculator} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
