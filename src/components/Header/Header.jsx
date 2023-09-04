import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  const userData = JSON.parse(localStorage.getItem("users"));
  const [isResponsive, setIsResponsive] = useState(false);
  let location = useLocation();

  const [open, setOpen] = useState(false);
  const toggleResponsive = () => {
    console.log("clickl");
    setIsResponsive((prevState) => !prevState);
  };

  const menuItems = (
    <>
      <li className="hidden lg:block">
        <NavLink className="navlinks flex items-center  " to="/">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
      </li>
      <li>
        <NavLink className="navlinks" to="/">
          Home
        </NavLink>
      </li>
      <li className=" ">
        <NavLink className="navlinks" to="/">
          Accounts
        </NavLink>
      </li>

      <li>
        <NavLink className="navlinks" to="/">
          Payment Information
        </NavLink>
      </li>
      <li>
        <Link to="/" className="navlinks">
          Contact Us
        </Link>
      </li>
      <li>
        <NavLink className="navlinks" to="/">
          Support
        </NavLink>
      </li>

      <li>
        <Link className="navlinks">
          <input
            type="text"
            className="input_design"
            placeholder="Find your favorite artists"
          />{" "}
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fa-regular fa-bell notification"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fa-solid fa-bag-shopping notification"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fa-regular fa-user notification"></i>
        </Link>
      </li>

      {/* notification panel */}
    </>
  );
  return (
    <nav className="nav_container">
      <div className="lg:hidden flex flex-row items-center justify-between px-4 py-2">
        <div className="flex flex-row items-center">
          <img src={logo} alt="logo" width="60" height="60" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-8 h-8 text-white font-bold"
        >
          {open ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </div>
      </div>
      <ul
        className={`nav_container lg:flex  justify-center items-center p-4  w-full absolute md:static duration-500 ease-in z-50 ${
          open ? "top-15" : "top-[-450px]"
        }`}
      >
        {menuItems}
      </ul>
    </nav>
  );
};

export default Header;
