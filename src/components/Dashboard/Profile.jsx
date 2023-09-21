import React, { useEffect, useState } from "react";
import pic from "../../assets/dash-img.png";

const Profile = () => {
  const userTokensJSON = localStorage.getItem("userTokens");
  const userTokens = JSON.parse(userTokensJSON);
  const token = userTokens[0]?.auth?.token;
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/api/mypage/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
console.log(profile)
const dateString =profile?.dob;
const dateOnly = dateString?.split('T')[0];
console.log(dateOnly);
  return (
    <div className="dashbord-main-left">
      <div className="userinfo-wrapper">
        <div className="userinfo_card">
          <div className="user_img">
            <img src={profile?.profilePicture} alt="image" />
          </div>

          <div className="user_information">
            <div className="info_group">
              <div className="info_item">
                <h4 className="info_item_title">name</h4>

                <input
                  className="info_input"
                  placeholder="Olivia"
                  type="text"
                  value={profile?.firstName}
                />
              </div>

              <div className="info_item">
                <h4 className="info_item_title">Email</h4>

                <input
                  className="info_input"
                  placeholder="oliva@gmail.com"
                  type="email"
                  value={profile?.email}
                />
              </div>

              <div className="info_item">
                <h4 className="info_item_title">Phone Number</h4>

                <input
                  className="info_input"
                  placeholder="+99551122444"
                  type="number"
                  value={profile?.telNumber}
                />
              </div>

              <div className="info_item">
                <h4 className="info_item_title">Date of Birth</h4>

                <input
                  className="info_input"
                  placeholder=""
                  type="text"
                  value={dateOnly}
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
