import React from "react";
import "./Register.css";
import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="mt-[110px] mb-[135px]">
      <div className="container">
        <div className="register_container">
          <h1 className="register_heading">Register with your</h1>
          <button className="google_btn_design">
            <span>
              <img src={google} alt="" />
            </span>{" "}
            <span className="sign_up_with_google_text">
              Sign up with Google
            </span>
          </button>
          <button className="google_btn_design">
            <span>
              <img src={facebook} alt="" />
            </span>{" "}
            <span className="sign_up_with_google_text">
              Sign up with Facebook
            </span>
          </button>
          <div className="flex flex-nowrap items-center justify-center gap-3">
            <div
              style={{ background: "#D0D5DD", width: "50%", height: "2px" }}
            ></div>
            <div className="or">or</div>
            <div
              style={{ background: "#D0D5DD", width: "50%", height: "2px" }}
            ></div>
          </div>

          <div className="w-full">
            <label htmlFor="" style={{ textAlign: "left" }} className="label">
              Email
            </label>
            <input
              style={{ marginTop: "8px" }}
              className="login_input1 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full mb-[40px] ">
            <label className="label">Password</label>
            <input
              style={{ marginTop: "8px" }}
              className="login_input2 text-sm w-full  border border-solid  rounded"
              type="password"
              placeholder="Password"
            />
            <small className="forget_password">Forgot password?</small>
          </div>

          <button class="neutral_btn mb-[24px]">Sign Up</button>
          <div className="text-center">
            <span className="have_an_account_text">
              {" "}
              Already have an account?{" "}
            </span>
            <a href="/" class="sign_up_link">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
