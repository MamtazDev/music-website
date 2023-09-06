import React from "react";
import mark from "../../assets/features-mark.svg";

const Subscription = () => {
  return (
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
            {/* <input type="checkbox" checked /> */}
            <input type="checkbox" className="toggle toggle-info"  />
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
  );
};

export default Subscription;
