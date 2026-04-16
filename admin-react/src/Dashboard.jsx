
import {useEffect,useState} from "react";
import axios from "axios";

export default function Dashboard(){
 const [data,setData]=useState([]);
 useEffect(()=>{axios.get("http://localhost:5000/api/requests").then(r=>setData(r.data))},[]);
 return <h2>Total Requests: {data.length}</h2>;
}
