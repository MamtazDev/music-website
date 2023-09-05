import React from "react";
import "./MusicTimeline.css";
import Stepper from "../Stepper/Stepper";
import facebook from "../../assets/devicon_facebook.png";
import youtube from "../../assets/logos_youtube-icon.png";
import shopify from "../../assets/logos_shopify.png";
import apple from "../../assets/apple-music.png";
const MusicTimeline = () => {
  return (
    <div className="mt-[80px] ">
      <div className="container ">
        <h1 className="text-[#0F0609] leading-[150%] text-[32px] font-[600] mb-[30px]">
          My Music Timeline
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[142px]">
          {/* left side */}
          <div>
            <input
              type="text"
              id="first_name"
              className="music_input  w-full "
              placeholder="Year"
              required
            />
            <input
              type="text"
              id="first_name"
              className="music_input  w-full "
              placeholder="Brand Name"
              required
            />
            <input
              type="text"
              id="first_name"
              className="music_input  w-full "
              placeholder="Song Name"
              required
            />
            <input
              type="text"
              id="first_name"
              className="music_input  w-full "
              placeholder="Video URL*"
              required
            />
            <button class="btn create_music_button">Create</button>
          </div>
          {/* right side */}
          <div>
            <form className="text_area">
              <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div class="flex items-center justify-between px-3 py-2 border-b ">
                  <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x ">
                    <div class="flex items-center space-x-1 sm:pr-4">
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                      >
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 12 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                          />
                        </svg>
                        <span class="sr-only">Attach file</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                      >
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>
                        <span class="sr-only">Embed map</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                      >
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                        <span class="sr-only">Upload image</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                      >
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                          <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                        </svg>
                        <span class="sr-only">Format code</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* text area */}
                <div class="px-4 py-2 bg-white rounded-b-lg">
                  <label for="editor" class="sr-only">
                    Publish post
                  </label>
                  <textarea
                    id="editor"
                    rows="8"
                    class="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0 "
                    placeholder="Write an article..."
                    required
                  ></textarea>
                </div>
              </div>
            </form>

            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
            <p className="share_text">Share this </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 center xs:items-center">
              <div className="facebookDiv">
                <div className="flex ">
                  <img src={facebook} alt="" />
                </div>
              </div>
              <div className="shopify">
                <div>
                  <img src={shopify} alt="" />
                </div>
              </div>
              <div className="youtube">
                <div>
                  <img src={youtube} alt="" />
                </div>
              </div>
              <div className="apple">
                <div>
                  <img src={apple} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stepper />
    </div>
  );
};

export default MusicTimeline;
