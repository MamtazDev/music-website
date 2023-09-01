import React from 'react';
import './MusicTimeline.css';
import Stepper from '../Stepper/Stepper';
import facebook from '../../assets/devicon_facebook.png'
import youtube from '../../assets/logos_youtube-icon.png'
import shopify from '../../assets/logos_shopify.png'
import apple from '../../assets/apple-music.png'
const MusicTimeline = () => {
    return (
        <>
            <div className="container music_container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* left side */}
                    <div>
                        <input type="text" id="first_name" className="music_input  w-full " placeholder="Year" required />
                        <input type="text" id="first_name" className="music_input  w-full " placeholder="Brand Name" required />
                        <input type="text" id="first_name" className="music_input  w-full " placeholder="Song Name" required />
                        <input type="text" id="first_name" className="music_input  w-full " placeholder="Video URL*" required />
                        <button class="btn create_music_button">Create</button>
                    </div>
                    {/* right side */}
                    <div>
                        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                        <small className='share_text'>Share  this  </small>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 center xs:items-center'>
                            <div className='facebookDiv'>
                                <div className='flex '>
                                    <img src={facebook} alt="" />
                                </div>
                            </div>
                            <div className='shopify'>
                                <div>
                                    <img src={shopify} alt="" />
                                </div>
                            </div>
                            <div className='youtube'>
                                <div>
                                    <img src={youtube} alt="" />
                                </div>
                            </div>
                            <div className='apple'>
                                <div>
                                    <img src={apple} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>





            <Stepper />


        </>
    );
};

export default MusicTimeline;