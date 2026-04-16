
import {useEffect,useState} from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default function Dashboard(){
 const [data,setData]=useState([]);
 useEffect(()=>{
  axios.get("http://localhost:5000/api/requests").then(r=>setData(r.data));
 },[]);
 return(
  <div style={{display:"flex"}}>
   <Sidebar/>
   <div style={{padding:20}}>
    <h2>Dashboard</h2>
    <p>Total Requests: {data.length}</p>
   </div>
  </div>
 );
}
