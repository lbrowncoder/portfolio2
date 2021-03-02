
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
     <Switch>
     <Route
     exact
     path='/'
     render={() => (
      <React.Fragment>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Work />
    </React.Fragment>
          )}
          />
       </Switch>
       </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
