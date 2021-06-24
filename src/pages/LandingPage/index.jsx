import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as RotateText from 'react-rotating-text';
import axios from 'axios';

import {
  faTwitter,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import year from 'year';
import './index.css';
import logo from './img/logo.svg';

export function LandingPage(props) {

    

  return (
    <div id="container">
      <h1 className="header-text">hey, I'm</h1>
      <h1 id="feature">
        <h2 className="featureLetter" id="a" onClick={() => {
          window.open("http://pigtoots.xyz/yes")
        }}>
          A
        </h2>
        <h2 className="featureLetter" id="s">
          S
        </h2>
        <h2 className="featureLetter" id="q">
          Q
        </h2>
        <h2 className="featureLetter" id="r">
          R
        </h2>
        <h2 className="featureLetter" id="y">
          Y
        </h2>
      </h1>
      <br />
      <br />
      <br />
      <br />
      <div id="info">
        <h3>
          web designer, developer, and "professional" unprofessional. <br />i cannot hack facebook :(
        </h3>
      </div>
      <div className="footer">
        &copy; asqry {year('yyyy')} 💖
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="link" href="/twitter" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="link" href="/github" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>

    
  );
}
