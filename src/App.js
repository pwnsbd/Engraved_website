import React, { useState, useEffect } from 'react';
import "./App.css";
import "./component/Text.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Nav/Navbar";
import Home from "./component/HomePage/Home.component";
import MobileHome from './component/HomePage/MobileVersionHomePage'

import Gallery from './component/Gallery/Gallery';
import HowItsDone from './component/How Its Done/HowItsDone';
import AboutUs from './component/AboutUs/AboutUs.js';



function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  return (
    <Router>
      <Navbar />
      <Switch>
      {width > 425 ?  <Route path="/" component={Home} exact /> :
      <Route path="/" component={MobileHome} exact />
      }
       
        <Route path="/Gallery" component={Gallery} />
        <Route path="/How-Its-Done" component={HowItsDone} />
        <Route path="/About Us" component={AboutUs} />
        {/* <Route component={Errors} /> */}
      </Switch>

      {/* <Footer /> */}
      {/* <Test/> */}
    </Router>
  );
}

export default App;
