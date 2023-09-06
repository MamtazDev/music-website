import React, { useState } from "react";
import dashHome from "../../assets/dash-home.svg";

import dollar from "../../assets/dash-dollar.svg";

import Support from "../../assets/dash-support.svg";
import Support1 from "../../assets/dash-support1.svg";
import User from "../../assets/dash-user.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div class={`dashbord-nav ${open && "toggleNavbar"} `} id="sidebar">
      {open ? (
        <div class="toggle-btn" onClick={() => setOpen(false)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <div onClick={() => setOpen(true)} class="toggle-close-btn lg:hidden">
          &#10005;
        </div>
      )}

      <div class="search-input">
        <input id="search-input" placeholder="Search" type="text" />
      </div>

      <nav>
        <ul class="nav-wrapper">
          <li class="nav-item">
            <img src={dashHome} alt="icon" />
            <a class="nav-link" href="#home">
              Home
            </a>
          </li>

          <li class="nav-item">
            <img src={User} alt="icon" />
            <a class="nav-link" href="#accounts">
              Accounts
            </a>
          </li>

          <li class="nav-item">
            <img src={dollar} alt="icon" />
            <a class="nav-link" href="#payment-info">
              Payment Info
            </a>
          </li>

          <li class="nav-item">
            <img src={Support} alt="icon" />
            <a class="nav-link" href="#support">
              Support
            </a>
          </li>

          <li class="nav-item">
            <img src={Support1} alt="icon" />
            <a class="nav-link" href="#support">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
