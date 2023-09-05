import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import bell from "../../assets/bell.png";
import bag from "../../assets/bag.png";
import profile from "../../assets/profile.png";
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
      <li className="hidden xl:block mr-[45px]">
        <NavLink className="navlinks flex items-center " to="/">
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

      <li className="me-[56px]">
        <Link>
          <input
            type="text"
            className="input_design"
            placeholder="Find your favorite artists"
          />{" "}
        </Link>
      </li>

      <li className="flex items-center">
        <Link className="me-[24px]" to="/">
          <img src={bell} alt="" />
        </Link>
      </li>

      <li className="flex items-center">
        <Link className="me-[24px]" to="/">
          <img src={profile} alt="" />
        </Link>
      </li>

      <li className="flex items-center">
        <Link className="" to="/">
          <img src={bag} alt="" />
        </Link>
      </li>
    </>
  );

  return (
    <nav className="nav_container">
      <div className="xl:hidden flex flex-row items-center justify-between px-4 py-2">
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
        className={`nav_container flex flex-col xl:flex-row justify-center items-center p-4 gap-4 xl:gap-0 w-full absolute md:static duration-500 ease-in z-50 ${
          open ? "top-15" : "top-[-450px]"
        }`}
      >
        {menuItems}
      </ul>
    </nav>
  );
};

export default Header;
