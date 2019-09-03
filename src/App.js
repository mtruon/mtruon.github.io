import React, { Component } from 'react';
import { BrowserRouter, NavLink } from "react-router-dom";
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Page from './Components/Page.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab, faEnvelope);

/*
TEMP: Removed about page
<ul>
  <li><NavLink to={"/about"}>About</NavLink></li>
</ul>
*/

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className='app-content'>
            <Navbar
              icon={
                "Assets/logo.svg"
              }
              menu={
                <ul></ul>
              }
            />
            <Page/>
          </div>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
