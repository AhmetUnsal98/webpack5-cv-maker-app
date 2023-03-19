import React from "react";
import "./footer.scss";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-footer">
        <div className="left">
          <h3>LOGO.</h3>
        </div>
        <div className="center">
          <h3>Usefull Links</h3>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
        </div>
        <div className="right">
          <h3>Social Media</h3>
          <div className="social-container">
            <IoLogoFacebook
              style={{ padding: "6px" }}
              size={32}
              color="white"
            />
            <IoLogoTwitter style={{ padding: "6px" }} size={32} color="white" />
            <IoLogoInstagram
              style={{ padding: "6px" }}
              size={32}
              color="white"
            />
            <div className="social-container-lang">
              <IoGlobeOutline
                style={{ padding: "6px" }}
                size={30}
                color="white"
              />
              <p>Türkçe(TR)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        {" "}
        <span>Copyright All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
