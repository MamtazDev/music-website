import React from 'react';
import Stepper from '../Stepper/Stepper';
import './CreateTimeline.css'
const CreateTimeline = () => {
    return (
        <div >
           <div className='container'> 
           <div class="edit_section_container">
                <div class="edit_container">
                    <h2 class="edit_heading">Edit Music Timeline</h2>
                    <label className='label add_item_label' >Add Item</label>
                        <input style={{ marginTop: "8px" }} className="login_input2 add_item_field w-full  border border-solid  rounded" type="text"  />
                    <button class="btn edit_button">Add</button>
                </div>
            </div>
           </div>
            <Stepper />
        </div>
    );
};

export default CreateTimeline;