import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './navbar.css';
import { AiFillDashboard } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import {BiCalendarPlus}  from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { GrNotes } from "react-icons/gr";

function Navbar(){
    return(
<>

<span className="body">
<ReactBootStrap.Navbar bg="light" variant="light" className="wid">

 <button><ReactBootStrap.NavDropdown title="Scheduler" id="collasible-nav-dropdown">

 </ReactBootStrap.NavDropdown></button>
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#"><AiFillDashboard /><p className="icon_up">Dashboard</p></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#"><IoIosPeople  /><p className="icon_up">Appointments</p></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#"><BsFillPeopleFill  /><p className="icon_up">Customers</p></ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <span className = "left_icons"> 
        <span><BiCalendarPlus className="icon"/></span>
        <span><RiContactsFill className="icon"/></span>

    </span>
  </ReactBootStrap.Navbar>
<span className="flex1">
  <h4 className="next">Make New Appointment</h4>
      <span className="right_icons"><VscGraph className="frsticon"/>
      <GrNotes className="secicon"/>
      </span>
      </span>
      </span>
</>
       
    )
}

export default Navbar