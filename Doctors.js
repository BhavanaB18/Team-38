import React from "react"
import {Link} from "react-router-dom"

function Doctors(props){
  return (
    <>
        <div className="farmer-box">
           <div >
                
                    <img className="photo" src={props.img} alt="farmer pic"   />
               
                <div className="detail">
                        Name: {props.name}<br/>
                        Email: {props.email}<br/>
                        Contact: {props.ph_no}<br/>
                        Specialization: {props.specilization}<br/>
                        Biography: {props.biography}<br/><br/>
                        
                        <Link to={props.url}> <button className="finalclick">Spot</button></Link> 
                        <br/><br/>
                        <Link to="Appointment"> <button className="finalclick">Appointment</button></Link> 
                </div>

                
        </div>
        </div>
    </>
  );
}

export default Doctors;