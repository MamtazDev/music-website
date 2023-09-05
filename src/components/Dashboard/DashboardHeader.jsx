import React from "react";
import edit from "../../assets/dash-edit.svg";
import Delete from "../../assets/dash-delete.svg";

const DashboardHeader = () => {
  return (
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
  );
};

export default DashboardHeader;
