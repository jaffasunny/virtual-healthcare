import { Avatar } from "@mui/material";
import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footer'>
        <div className='footer__left'>
          <div className='footer__leftTitle'>
            <Avatar
              sx={{ bgcolor: "#ffff", color: "#5B9BF3", fontSize: "1.625rem" }}>
              J
            </Avatar>
            <h3>Jaffer Sunny</h3>
          </div>
          <p className='smallText'>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>

          <p className='footer__leftTrademark'>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className='footer__right'>
          <div className='footer__rightCompany'>
            <h3>Company</h3>
            <a href='#'>About</a>
            <a href='#'>Testimonials</a>
            <a href='#'>Find a doctor</a>
            <a href='#'>Apps</a>
          </div>
          <div className='footer__rightRegion'>
            <h3>Region</h3>
            <a href=''>Indonesia</a>
            <a href=''>Singapore</a>
            <a href=''>Hongkong</a>
            <a href=''>Canada</a>
          </div>
          <div className='footer__rightHelp'>
            <h3>Help</h3>
            <a href=''>Help center</a>
            <a href=''>Contact support</a>
            <a href=''>Instructions</a>
            <a href=''>How it works</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
