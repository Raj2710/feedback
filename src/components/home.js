import {Link} from "react-router-dom";
export default function Home(){
    return <>
        <div className="homebody">
            <Link to="givefeedback">
                <u>Click Here!</u>
            </Link>
            <span> To give Feedback. More Items Coming Soon</span>
        </div>
    </>
}