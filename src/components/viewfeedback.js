import {useState,useEffect} from "react";
import axios from 'axios';
export default function View(){
    let [data,setData]=useState('');
    const url = "https://60850c1c9b2bed00170417c8.mockapi.io/fb";
 /* Using fetch
    useEffect(()=>{
        handleEvent();
    },[]);
    let handleEvent = async()=>{
       await fetch("https://60850c1c9b2bed00170417c8.mockapi.io/fb")
        .then(response=>response.json())
        .then((d)=>{
            setData(d);
        })
        .catch(error=>console.log(error));
    }*/
 /* Using Axios*/
     useEffect(()=>{
        getAllData();
    });
    const getAllData= async ()=>{
         await axios.get(url)
        .then((response)=>{
            const allData = response.data;
            setData(allData);
        })
        .catch(error=>console.error(error));
    }
    return <>
        <div style={{padding:"25px"}}>
            <h2 style={{textAlign:"center"}}>All the records are available here!</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr  style={{textAlign:"center"}}>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Mentor Name</th>
                        <th>Rating</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                {console.log("Data is "+data)}
                    {
                        data.map((e)=>{
                            return<>
                                <tr style={{textAlign:"center"}} key={e.id}>
                                    <td>{e.userName}</td>
                                    <td>{e.userEmail}</td>
                                    <td>{e.userMobile}</td>
                                    <td>{e.mentorName}</td>
                                    <td>{e.userRating}</td>
                                    <td>{e.userComments}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>

}