
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import About from './pages/About';
import Skills from './pages/Skills';
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
        <About />
        <Skills />
    </React.Fragment>
          )}
          />
       </Switch>
       </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
