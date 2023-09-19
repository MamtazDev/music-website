import React, { useState } from "react";
import Frame from "../../../assets/Frame.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../Provider/UserProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  /*  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log("Login success:", data);
        navigate("/timeline");
      } else {
        const errorData = await response.json();
        console.error("Login error:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
 */
  /*   const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log("Login success:", data);
        navigate("/timeline");
        
        setUser(data.user);

      } else {
        const errorData = await response.json();
        console.error("Login error:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }; */
  /*   const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log("Login success:", data);
          let userTokens = JSON.parse(localStorage.getItem("userTokens")) || [];
  
        // Add the user's auth token as an object to the array
        userTokens.push({
          userId: data.user.id,
          auth: data.auth,
          email:data.user.email
        });
          localStorage.setItem("userTokens", JSON.stringify(userTokens));
          setUser(data.user);
          navigate("/timeline");
      } else {
        const errorData = await response.json();
        console.error("Login error:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }; */

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log("Login success:", data);

        // Check if the user data is already present in localStorage
        let userTokens = JSON.parse(localStorage.getItem("userTokens")) || [];

        // Check if the user is already in the userTokens array
        const isUserAlreadyLoggedIn = userTokens.some(
          (userToken) => userToken.userId === data.user.id
        );

        if (!isUserAlreadyLoggedIn) {
          // Add the user's auth token as an object to the array
          userTokens.push({
            userId: data.user.id,
            auth: data.auth,
            email: data.user.email,
          });

          localStorage.setItem("userTokens", JSON.stringify(userTokens));
        }

        setUser(data.user);
        navigate("/timeline");
      } else {
        const errorData = await response.json();
        console.error("Login error:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

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
                value={email}
                onChange={handleEmailChange} // Update the email state on change
              />

              <label htmlFor="" className="label_design">
                Password
              </label>
              <input
                style={{ marginTop: "8px" }}
                className="login_input text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange} // Update the password state on change
              />

              <button
                className="neutral_btn w-full"
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>

              <div style={{ marginTop: "40px" }} className="text-center">
                <span className="have_an_account_text">
                  {" "}
                  Already have an account?{" "}
                </span>
                <Link to="/signup" className="sign_up_link">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
