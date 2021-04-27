import {useState} from "react";
import {Link} from "react-router-dom";
export default function Give(){
    let [userName,setUserName]=useState("");
    let [userMobile,setUserMobile]=useState("");
    let [userEmail,setUserEmail]=useState("");
    let [mentorName,setMentorName]=useState("");
    let [userRating,setUserRating]=useState("");
    let [userComments,setUserComments]=useState("");

    let handleEvent = ()=>{
        alert("Feedback saved");
        console.log([{userName,userMobile,userEmail,mentorName,userRating,userComments}]);
        fetch("https://60850c1c9b2bed00170417c8.mockapi.io/fb",{
            method: "POST",
            body: JSON.stringify({userName,userMobile,userEmail,mentorName,userRating,userComments}),
            headers:{
                "Content-type":"application/json"
            }
        })
    }
    return <>
    <div>
        <h2 className="header">Tell us how satisfied you are!</h2>
        <div className="row" style={{padding:"25px"}}>
            <div className="col-lg-4">
                <label><b>Your Name:</b>*</label>
                <input type="text" className="form-control" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
            </div>
            <div className="col-lg-4">
                <label><b>Mobile Number:</b>*</label>
                <input type="text" className="form-control" value={userMobile} onChange={(e)=>setUserMobile(e.target.value)}></input>
            </div>
            <div className="col-lg-4">
                <label><b>Email:</b>*</label>
                <input type="text" className="form-control" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}></input>
            </div>
        </div>
        <div className="row" style={{padding:"25px"}}>
            <div className="col-lg-6">
                <label><b>Mentor Name:</b>*</label>
                <input type="text" className="form-control" value={mentorName} onChange={(e)=>setMentorName(e.target.value)}></input>
            </div>
            <div className="col-lg-6">
                <label><b>Comments:</b>*</label>
                <input type="text" className="form-control" value={userComments} onChange={(e)=>setUserComments(e.target.value)}></input>
            </div>
        </div>
        <div className="row" style={{padding:"25px"}}>
            <div className="col-lg-4"><b>Rate the Session on a scale of 5:</b></div>
            <div className="col-lg-8">
                <input type="radio" name="rating" value="1" onChange={(e)=>setUserRating(e.target.value)}></input> Poor
                <input type="radio" name="rating" value="2" onChange={(e)=>setUserRating(e.target.value)}></input> Below Average
                <input type="radio" name="rating" value="3" onChange={(e)=>setUserRating(e.target.value)}></input> Average
                <input type="radio" name="rating" value="4" onChange={(e)=>setUserRating(e.target.value)}></input> Good
                <input type="radio" name="rating" value="5" onChange={(e)=>setUserRating(e.target.value)}></input> Excellent
            </div>
        </div>
        <div className="row" style={{padding:"25px"}}>
            <div>
                * all your informations will remain confidential.
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 text-center">
                <Link to="/thanks">
                    <input type="submit" className="btn btn-success" onClick={handleEvent}></input>
                </Link>
            </div>
        </div>
    </div>
    </>
}

//User Name
//Mobile number
//Email
//Mentor Name
//Comments
//Rate out of 5
//Time stamp for admin use