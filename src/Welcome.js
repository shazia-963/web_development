import React from "react";
import classroom from './Images/classroom.png';
import { Link } from "react-router-dom";
import "./Events.js";
import "./welcome.css";
import "./Welcome.js";
function Welcome() {
    return (
      <div className="items">
           <nav className="navbar" >
                <ul className="Item-2" class="responsive" width={1200} >
                    <h3>Web-based E-learning Program</h3>
                    <li><Link to="/Events" ><b>Events</b></Link></li>
                    <li><Link to="/Portal" ><b>Portal</b></Link></li>
                    <li><Link to="/search" ><b>Search</b></Link></li>
                    <li><Link to="/" className="btn btn-danger"><b><i class="fa-solid fa-right-from-bracket"></i></b></Link></li>
                  </ul>
            </nav>
            <img src={classroom} width={1200} height={700} class="responsive"alt="abc" />
        </div>
    )
}
export default Welcome;