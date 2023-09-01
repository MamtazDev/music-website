import React from "react";
import "./Timeline.css";
import { Link } from "react-router-dom";
const Timeline = () => {

  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 timeline_container">
        <div className="timeline_1">
          <h3 className="text_design create_text">Create timeline</h3>
          <button class="btn btn-neutral create_now">Create Now</button>
        </div>
        <div className="timeline_1">
          <h3 className="text_design create_text">Edit timeline</h3>
          <button class="btn btn-neutral create_now">Edit Now</button>
        </div>
      </div> */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className=" create_timeline">
            <h3 className="text_design create_text">Create timeline</h3>
            <button class="btn btn-neutral create_now_btn">Create Now</button>
          </div>
          <div className="create_timeline">
            <h3 className="text_design create_text">Edit timeline</h3>
           <Link to="/createTimeline" className="w-full"> <button class="btn create_now_btn btn-neutral">Edit Now</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
