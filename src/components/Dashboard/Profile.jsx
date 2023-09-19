import React from "react";
import pic from "../../assets/dash-img.png";

const Profile = () => {
  return (
    <div className="dashbord-main-left">
      <div className="userinfo-wrapper">
        <div className="userinfo_card">
          <div className="user_img">
            <img src={pic} alt="image" />
          </div>

          <div className="user_information">
            <div className="info_group">
              <div className="info_item">
                <h4 className="info_item_title">name</h4>

                <input className="info_input" placeholder="Olivia" type="text" />
              </div>

              <div className="info_item">
                <h4 className="info_item_title">Email</h4>

                <input
                  className="info_input"
                  placeholder="oliva@gmail.com"
                  type="email"
                />
              </div>

              <div className="info_item">
                <h4 className="info_item_title">Phone Number</h4>

                <input
                  className="info_input"
                  placeholder="+99551122444"
                  type="number"
                />
              </div>

              <div className="info_item">
                <h4 className="info_item_title">Date of Birth</h4>

                <input
                  className="info_input"
                  placeholder="+99551122444"
                  type="date"
                />
              </div>

              <div className="editable-item-right">
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
