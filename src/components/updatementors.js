import {useState} from "react";
import {Link} from "react-router-dom";
export default function UpdateMentors(){
    let [mentorName,setMentorName]=useState("");

    return <>
        <h2 className="header">Mentor Management</h2>
        <div className="row" style={{padding:"25px"}}>
            <div className="col-lg-4">
                <label><b>Your Name:</b>*</label>
                <input type="text" className="form-control" value={mentorName} onChange={(e)=>setMentorName(e.target.value)}></input>
            </div>
        </div>
    </>
}