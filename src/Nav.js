import React, { useEffect, useState } from "react";
import './Nav.css';
import pc2 from './Image/pc2.jpg';
import Netflix from './Image/Netflix.SVG';




function Nav(){
    const [show, handleShow]=useState(false);
    useEffect( ()=>{
        window.addEventListener("scroll",()=>{
          if(window.scrollY>100){
              handleShow(true);
          }else handleShow(false);
        });
     /*  return()=>{
            window.removeEventListener("scroll");
        }*/

    },[]);

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src= {Netflix}
            alt="netflix-logo"/>

             <img className="nav_avatar"
            src= {pc2}
            alt="netflix-logo"/>

        </div>

    )
}
export default Nav;