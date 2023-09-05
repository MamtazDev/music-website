import React, { useState } from "react";
import Frame from "../../../assets/Frame.png";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  /*   const handleLogin = (e) => {
      e.preventDefault();
      console.log("Username:", email);
      console.log("Password:", password);
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const existingUsernames = existingUsers.map((user) => user.username);
      if (!existingUsernames.includes(email)) {
        const newUser = { username: email, password, isAuthenticated };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
      } else {
        console.log("Username already exists");
      }
    }; */
  return (
    <div className="mt-[85px] mb-[94px]">
      <div className="container">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <img src={Frame} alt="Sample image" />
          </div>
          <form className="form_design">
            <div className="">
              <p className="mx-4 mb-0 text-center login_header">
                Login/ Registration
              </p>
              <label
                htmlFor=""
                style={{ marginBottom: "10px" }}
                className="label_design"
              >
                Email
              </label>
              <input
                style={{ marginTop: "8px" }}
                className="login_input text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="text"
                placeholder="Email Address"
              />

              <label htmlFor="" className="label_design">
                Password
              </label>
              <input
                style={{ marginTop: "8px" }}
                className="login_input text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                type="password"
                placeholder="Password"
              />

              <Link to="/timeline">
                <button class="neutral_btn w-full">Sign In</button>
              </Link>
              <div style={{ marginTop: "40px" }} className="text-center">
                <span className="have_an_account_text">
                  {" "}
                  Already have an account?{" "}
                </span>
                <a href="/signup" class="sign_up_link">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
