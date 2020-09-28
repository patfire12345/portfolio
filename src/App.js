import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/JavaScript Pages/Home";
import Projects from "./components/JavaScript Pages/Projects";
import School from "./components/JavaScript Pages/School";
import Awards from './components/JavaScript Pages/Awards';
import { BrowserRouter,Route } from 'react-router-dom';
import "./App.css";

// Front-end where everything is displayed
class App extends Component {
  render() {
    return (

      // BrowserRouter for links
      <BrowserRouter>
        <div className="App">
          
          <Navbar /> 
          
          
          <Home/>
          <Projects/>
          <Awards/>
          
        </div>
      </ BrowserRouter>
    ); 
    }
}

export default App;
/*
<Switch>
              
<Route exact path="/home" component={Home} />
<Route path="/resume" component={Resume} />
<Route path="/projects" component={Projects} />
<Route path="/school" component={School} />

</Switch> 
*/
