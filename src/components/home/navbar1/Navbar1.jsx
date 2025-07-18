import React from 'react';
import './Navbar1.css';
import facebook from '../images/fb.png';
import twitter from '../images/twitter.png';
import instagram from '../images/insta.png';
import linkedin from '../images/linkedin.png';
import login from '../images/login.png';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <div className="navbar1">
      <div className="n11">
        <div className="hnav1">
          <img className="himg" src={facebook} alt="Facebook" />
        </div>
        <div className="hnav1">
          <img className="himg" src={linkedin} alt="LinkedIn" />
        </div>
        <div className="hnav1">
          <img className="himg" src={twitter} alt="Twitter" />
        </div>
        <div className="hnav1">
          <img className="himg" src={instagram} alt="Instagram" />
        </div>
      </div>
      <div className="n12">
        <div className="hnav2">
          <Link to="/login">
            <img className="himg" src={login} alt="Login" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
