// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import "../App.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Sidebar = () => {
const [active,setActive] = useState({dashboard : "active",trains:"",stations:"",seats:"",RunningTrains:""});
useEffect(() => {
  console.log(active)

}, [])
const history = useHistory();
  return (
    <nav id="sidebar" style={{ position:'sticky',position:'-webkit-sticky' }}>
      <div className="sidebar-header" style={{ position:'sticky',position:'-webkit-sticky' }}>
        <h3>Welcome Prakash</h3>
      </div>
      <ul className="list-unstyled components">
        <li className= {active.dashboard}onClick={()=>{ setActive({dashboard : "active",trains:"",stations:"",seats:""})}}>
         
          <Link to="/admin">Dashboard</Link>
         
        </li>
        <li className= {active.trains} onClick={()=>{setActive({dashboard : "",trains:"active",stations:"",seats:""}  ); }}>
          <Link to="/admin/trains" onClick={()=>{history.push("/admin/trains")} }>Trains</Link>
        </li>
        <li className= {active.stations}onClick={()=>{setActive({dashboard : "",trains:"",stations:"active",seats:""})}}>
          <Link to="/admin/stations">Stations</Link>
        </li>
        <li className= {active.seats}onClick={()=>{setActive({dashboard : "",trains:"",stations:"",seats:"active"})}}>
          <Link to="/admin/seats">Seats</Link>
        </li>
        <li className= {active.RunningTrains}onClick={()=>{setActive({dashboard : "",trains:"",stations:"",seats:"",RunningTrains:"active"})}}>
          <Link to="/admin/running-trains">Trains Schedule</Link>
        </li>
        <li className= {active.RunningTrains}onClick={()=>{setActive({dashboard : "",trains:"",stations:"",seats:"",RunningTrains:"active"})}}>
          <Link to="/admin/running-trains">Passengers</Link>
        </li>   
        
      </ul>
    </nav>
  );
};

export default Sidebar;
