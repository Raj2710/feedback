import {Link} from "react-router-dom";
export default function Topbar(){
    return <>
        <div className="navbar">
            <div className="brand">
                <h3> Feedback Form</h3>
            </div>
            <div className="options">
                 <Link to="/home" className="Link">
                    <span className="item">Home</span>
                </Link>
                <Link to="/update" className="Link">
                    <span className="item">Update Mentors</span>
                </Link>
                <Link to="/givefeedback" className="Link">
                    <span className="item"> Give Feedback</span>
                </Link>
                <Link to="/viewfeedback" className="Link">
                    <span className="item"> View Feedback</span>
                </Link>
                <span className="item">Welcome Mr. Nagarajan</span>
                <button className="btn btn-danger">Logout</button>
            </div>
        </div>
    </>
}