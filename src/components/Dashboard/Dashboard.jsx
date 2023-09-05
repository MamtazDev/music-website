import React from "react";
import "./Dashboard.css";
import dashHome from "../../assets/dash-home.svg";
import dashboard from "../../assets/dash-board.svg";
import Delete from "../../assets/dash-delete.svg";
import dollar from "../../assets/dash-dollar.svg";
import edit from "../../assets/dash-edit.svg";
import pic from "../../assets/dash-img.png";
import Search from "../../assets/dash-search.svg";
import Support from "../../assets/dash-support.svg";
import Support1 from "../../assets/dash-support1.svg";
import User from "../../assets/dash-user.svg";
import mark from "../../assets/features-mark.svg";

const Dashboard = () => {
  return (
    <div>
      <div class="dashbord-wrapper">
        <div class="dashbord-nav" id="sidebar">
          <div class="toggle-btn" onclick="toggleSidebar(this)">
            <span></span>
            <span></span>
            <span></span>
          </div>

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

        <div class="dashbord-main">
          <div class="dashbord-title">
            <div class="title-name">
              <h2>User Dashboard</h2>
            </div>
            <div class="title-function">
              <div class="function-wrap">
                <a href="#">
                  <img src={edit} alt="icon" />
                </a>
                <a href="#">
                  <img src={Delete} alt="icon" />
                </a>
              </div>
            </div>
          </div>

          <div class="dashbord-main-wrapper">
            <div class="dashbord-main-left">
              <div class="userinfo-wrapper">
                <div class="userinfo_card">
                  <div class="user_img">
                    <img src={pic} alt="image" />
                  </div>

                  <div class="user_information">
                    <div class="info_group">
                      <div class="info_item">
                        <h4 class="info_item_title">name</h4>

                        <input
                          class="info_input"
                          placeholder="Olivia"
                          type="text"
                        />
                      </div>

                      <div class="info_item">
                        <h4 class="info_item_title">Email</h4>

                        <input
                          class="info_input"
                          placeholder="oliva@gmail.com"
                          type="email"
                        />
                      </div>

                      <div class="info_item">
                        <h4 class="info_item_title">Phone Number</h4>

                        <input
                          class="info_input"
                          placeholder="+99551122444"
                          type="number"
                        />
                      </div>

                      <div class="info_item">
                        <h4 class="info_item_title">Date of Birth</h4>

                        <input
                          class="info_input"
                          placeholder="+99551122444"
                          type="date"
                        />
                      </div>

                      <div class="editable-item-right">
                        <button>ADD</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dashbord-main-right">
              <div class="subscription-card">
                <h4>My Subscription</h4>

                <div class="subscription_item_wrapper">
                  <div class="subscription_item">
                    <h5>Free</h5>

                    <div class="subscription_item_btn">
                      <button>ADD</button>
                    </div>
                  </div>

                  <div class="subscription_item">
                    <h5>Premium</h5>

                    <div class="subscription_item_btn">
                      <button className="bg-black text-white">ADD</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="subscription-card">
                <div class="subscription-card-title">
                  <h4>My Subscription</h4>
                  <label class="switch">
                    <input type="checkbox" checked />
                    <span class="slider round"></span>
                  </label>
                </div>

                <div class="subscription_item_wrapper">
                  <h5>Features</h5>

                  <ul class="features_wrapper">
                    <li class="features_item">
                      <img src={mark} alt="icon" />
                      <p>Synced lyrics for Instagram</p>
                    </li>

                    <li class="features_item">
                      <img src={mark} alt="icon" />
                      <p>Daily streaming stats</p>
                    </li>

                    <li class="features_item">
                      <img src={mark} alt="icon" />
                      <p>Customizable label</p>
                    </li>

                    <li class="features_item">
                      <img src={mark} alt="icon" />
                      <p>Customizable preorder date</p>
                    </li>

                    <li class="features_item">
                      <img src={mark} alt="icon" />
                      <p>5-100 artists or bands</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
