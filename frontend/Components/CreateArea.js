import React, { useState } from "react";

function CreateArea(props){

    const [noteValue, setnoteValue] = useState({title: "",
                                                content: ""})
    const [notes, setNotes] = useState([]);

    /**
     * 
     * Handle the change in state
     */
    function handleChange(event){
     
    }

    /**
     * 
     * Handle Clicks for Submit
     */
    function handleClick(event){
        
   
    }
    
    return (
        <div>
            <form className="create-note">
                <input name="title" 
             
                placeholder="Title" />

                <textarea name="content"
                        placeholder="content" 
                        />
                <button >Submit</button>
             
                
                
            </form>
        </div>
    )

}

export default CreateArea;