import React from "react";
import "./Stepper.css";
import { useState } from "react";
import axios from "axios";
const Stepper = ({ data, handleDeletBtn }) => {
  const [isLoading, setIsLoading] = useState([]);

  return (
    <div className="stepper">
      <div className="timeline-section ">
        <div className="text-center">
          <button className="button_design">1971</button>
        </div>
        <div className="timeline-items">
          {data.map((data, index) => (
            <div
              className={`timeline-item first_timeline ${
                index % 2 === 0
                  ? "left_box"
                  : "right_box block lg:flex justify-start lg:justify-end w-full right_box"
              }`}
              key={index}
            >
              <div className="timeline-dot">{data.year}</div>
              <div className="timeline-date">
                <div className="timeline-content">
                  <div className="parent_text">
                    <div className="left_text">
                      <h3 className="brandname">Brand Name</h3>
                      <p className="kiss">{data.bandNames}</p>
                      <h3 className="songname">Song Name</h3>
                      <p className="love_it_loud_text">{data.songNames}</p>
                    </div>
                    <div className="right_text">
                      <h3 className="my_story">My Story</h3>
                      <p className="story_details">{data.myStory}</p>
                      <div className="edit_delete_icons">
                        <button className="edit_icon">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button
                          className="delete_icon"
                          onClick={() => handleDeletBtn(data._id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="button_design">1971</button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
