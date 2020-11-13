import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { FaNotesMedical } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { FaBus } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoIosBookmark,IoIosThumbsUp } from "react-icons/io";
import { GoAlert } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import './table1.css';

function Table1(){
    return(   
<>
<span className="tables">
<span className="tab1">
<ReactBootStrap.Nav className="search-bar">
<FaNotesMedical className="icon"/>
<span className="apntcon">
    <span className="custo">Appointment</span>
  <span className="sear">Confirmation</span>
  </span>
 
<ReactBootStrap.Table  responsive striped bordered hover w-auto className="table1">
<thead>
    <tr className="column_width">
    <td>
    
        <MdContacts className="side_icons"/>
        <span className="flex">
        <span className ="upper_words">CUSTOMER</span>
        <span className="below_letter1">Judy Troupe</span>
        </span>
    </td>
    </tr>
    <tr className="column_width">
    <td>
        <GiHouseKeys className="side_icons"/>
        <span className="flex">
        <span className="upper_words">VEHICLE</span>
        <span className="below_letter2">2010 BMW 535i</span>
        </span>
    </td>
    </tr>
    <tr className="column_width">
    <td>
        <MdDateRange className="side_icons"/>
        <span className="flex">
        <span className="upper_words">DATE</span>
        <span className="below_letter3">Tuesday, June 4,2013</span>
        </span>
    </td>
    </tr>
    <tr className="column_width">
    <td>
    <IoMdPeople className="side_icons"/>
    <span className="flex">
        <span className="upper_words">ADVISOR OR TEAM</span>
        <span className="below_letter4">Steave Robertson</span>
        </span>
    </td>
    </tr>
    <tr className="column_width">
    <td>
    <FaBus className="side_icons"/>
    <span className="flex">
        <span className="upper_words">TRANSPORTATION</span>
        <span className="below_letter5">Loaner</span>
        </span>
    </td>
    </tr>
<tr>
<div>
  <ReactBootStrap.Table responsive="sm">
    <thead>
      <tr>
        <td><FaCarSide className="small_icons" /><span className="mid_words">20,000 Mile Service- Factory Schedule 3</span><span className="nd1" >2.0</span><span className="st">$140.00</span></td>
        </tr>
        <tr>
        <td><FaTools className="small_icons" /><span className="mid_words">Replace Wipers</span><span className="nd2" >5</span><span className="st">$50.00</span></td>
        </tr>
        <tr>
        <td><FaTools className="small_icons" /><span className="mid_words">Defog Headlamps</span><span className="nd3" >5</span><span className="st">$140.00</span></td>
        </tr>
        <tr>
        <td><IoIosBookmark className="small_icons" /> <span className="mid_words">Replace Spark Plugs</span><span className="nd4" >1.5</span><span className="st">$250.00</span></td>
        </tr>
        <tr>
        <td><IoIosBookmark className="small_icons" /> <span className="mid_words">Brake Caliper Repair</span><span className="nd5" >2.5</span><span className="st">$350.00</span></td>
        </tr>
        <tr>
        <td><GoAlert className="small_icons" /><span className="mid_words">Electrical System</span><span className="nd6" >2.0</span><span className="st">$0.00</span></td>
        </tr>
        <span className="nd7">9.0 hrs</span><span className="nd8">$840.00</span>
    </thead>
    </ReactBootStrap.Table>
</div>
</tr>
   <tr className="column_width">
    <td>
    <IoIosThumbsUp  className="side_icons"/>
    <span className="flex">
        <span className="upper_words">CONFIRMATION</span>
        <span className="below_letter6">jodyt2@mac.com</span>
        </span>
    </td>
    </tr>
    <tr className="column_width">
    <td>
    <GrNotes className="side_icons"/>
    <span className="flex">
        <span className="upper_words">NOTES FOR DMS</span>
        <span className="below_letter7">Customer states that the call is putting to the right</span>
        </span>
    </td>
    </tr>
    <tr className="column_width">
    <td>
        <span className="left_time">Booking time: June 4 2013 @ 7:22</span>
        <span className="right_time">Booked by:Steve Robertson</span>
    </td>
    </tr>
  </thead>
</ReactBootStrap.Table>
</ReactBootStrap.Nav>
</span>
</span>
</>

)
}

export default Table1