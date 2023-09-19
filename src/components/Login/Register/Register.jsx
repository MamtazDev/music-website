import React, { useEffect, useState } from "react";
import "./Register.css";
import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("email", event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("pass", event.target.value);
  };
  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 201) {
        const data = await response.json();
        console.log("Registration success:", data);
        history.push("/dashboard");
      } else {
        const errorData = await response.json();
        console.error("Registration error:", errorData.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  
  useEffect(() => {
    fetch("http://localhost:5000/api/timeline/test")
      .then((res) => res.text())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="mt-[110px] mb-[135px]">
      <div className="container">
        <div className="register_container">
          <h1 className="register_heading">Register with your</h1>
          <button className="google_btn_design">
            <span>
              <img src={google} alt="" />
            </span>
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
              onChange={handleEmailChange}
            />
          </div>
          <div className="w-full mb-[40px] ">
            <label className="label">Password</label>
            <input
              style={{ marginTop: "8px" }}
              className="login_input2 text-sm w-full  border border-solid  rounded"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <small className="forget_password">Forgot password?</small>
          </div>

          <button className="neutral_btn mb-[24px]" onClick={handleRegister}>
            Sign Up
          </button>
          <div className="text-center">
            <span className="have_an_account_text">
              {" "}
              Already have an account?{" "}
            </span>
            <a href="/" className="sign_up_link">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
