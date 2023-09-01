import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
const Footer = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div className={`${location.pathname === "/timeline" && "fixed"}`
    }>

      <div className="footer_bg" >
        <div className="container">
          <footer class="footer_container  ">
            <div>
              <a href="#" class="">
                Terms and Conditions
              </a>
              <a href="#" class="Privacy">
                Privacy Policy
              </a>
            </div>
            <p class="">&copy; 2023 Company Name</p>
          </footer>
        </div>
      </div>
    </div >
  );
};

export default Footer;
