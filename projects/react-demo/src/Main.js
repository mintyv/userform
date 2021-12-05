import React, { Component } from "react";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class Main extends Component {
  render() {
    return (
        <div>
          <h1>Mina's Hello World From React!</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
            <h2>GOT QUESTIONS?</h2>
            
            <p>The easiest thin to do is post on our <a href="http://www.google.com">forums.</a></p>
          </div>
        </div>
    );
  }
}
 
export default Main;