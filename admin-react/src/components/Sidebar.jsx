
import {Link} from "react-router-dom";
export default function Sidebar(){
 return(
  <div style={{width:220,background:"#111",color:"#fff",height:"100vh",padding:20}}>
   <h2>MySnacks</h2>
   <Link to="/">Dashboard</Link><br/>
   <Link to="/locations">Locations</Link>
  </div>
 );
}
