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
    <div className="container">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <img
            src={Frame}
            alt="Sample image" />
        </div>
        <form className="form_design md:py-5">
          <div className="">
            <p className="mx-4 mb-0 text-center login_header">Login/ Registration</p>
            <label htmlFor="" style={{marginBottom:"10px" }} className="label_design">Email</label>
            <input style={{marginTop:"8px" }} className="login_input text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />

            <label htmlFor="" className="label_design">Password</label>
            <input style={{marginTop:"8px" }} className="login_input text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />

            <Link to="/timeline">
              <button class="btn btn-neutral input_field_design w-full">
              Sign In
              </button>
            </Link>
            <div className="text-center">
              <span have_an_account_text> Already have an account? </span>
              <a
                href="/signup"
                class="sign_up_link"
              >
                Sign up
              </a>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;


/* 
  <form class="space-y-4">
              <div>
                <label class="label">
                  <span class="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  class="w-full input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  class="w-full input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button class="btn btn-neutral w-full" onClick={handleLogin}>
                  Sign In
                </button>
              </div>
              <div className="text-xs text-gray-600">
                <span> Already have an account? </span>
                <a
                  href="#"
                  class="text-xs text-gray-600 hover:underline hover:text-blue-600"
                >
                  Sign up
                </a>
              </div>
            </form>
*/

/* 

<div className="login_page_design ">
        <div className="">
          <img className="frame" src={Frame} alt="Example" />
        </div>
        <form class="space-y-4 form_container">
          <h1 class="text-3xl font-semibold text-center text-gray-700">
            login/ registration
          </h1>
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              class=" input input-bordered input_field_design"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              class="input_field_design input input-bordered"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button class="btn btn-neutral input_field_design" onClick={handleLogin}>
              Sign In
            </button>
          </div>
          <div className="text-xs text-gray-600">
            <span> Already have an account? </span>
            <a
              href="#"
              class="sign_up_link"
            >
              Sign up
            </a>
          </div>
        </form>

      </div>

*/