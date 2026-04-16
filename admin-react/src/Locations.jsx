
import {useEffect,useState} from "react";
import axios from "axios";

export default function Locations(){
 const [list,setList]=useState([]);
 const [name,setName]=useState("");

 const load=()=>axios.get("http://localhost:5000/api/locations").then(r=>setList(r.data));
 useEffect(()=>{load()},[]);

 return (
  <div>
    <input value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={()=>axios.post("http://localhost:5000/api/locations",{name}).then(load)}>Add</button>
    <ul>{list.map(l=><li key={l._id}>{l.name}</li>)}</ul>
  </div>
 );
}
