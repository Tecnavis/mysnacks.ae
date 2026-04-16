
import {useEffect,useState} from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default function Locations(){
 const [list,setList]=useState([]);
 const [name,setName]=useState("");

 const load=()=>axios.get("http://localhost:5000/api/locations").then(r=>setList(r.data));
 useEffect(()=>{load()},[]);

 const add=()=>axios.post("http://localhost:5000/api/locations",{name}).then(()=>{setName("");load();});
 const del=id=>axios.delete("http://localhost:5000/api/locations/"+id).then(load);

 return(
  <div style={{display:"flex"}}>
   <Sidebar/>
   <div style={{padding:20}}>
    <h2>Locations</h2>
    <input value={name} onChange={e=>setName(e.target.value)} placeholder="Location"/>
    <button onClick={add}>Add</button>
    <ul>
     {list.map(l=><li key={l._id}>{l.name} <button onClick={()=>del(l._id)}>Delete</button></li>)}
    </ul>
   </div>
  </div>
 );
}
