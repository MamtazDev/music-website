import React from "react";
import pic from "../../assets/dash-img.png";

const Profile = () => {
  return (
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

                <input class="info_input" placeholder="Olivia" type="text" />
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
  );
};

export default Profile;
