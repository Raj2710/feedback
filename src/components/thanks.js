import {Link} from 'react-router-dom';
export default function Thanks(){
    return <>
        <div className="text-center">
            <h1>Thanks for your Feedback</h1>
            <Link to="/home">
                <button className="btn btn-success">Cool!</button>
            </Link>
        </div>
    </>
}