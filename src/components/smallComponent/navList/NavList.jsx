import React from "react";
import { Link } from "react-scroll";
import { NavListConstant } from "../../../constant/NavConstant";
import "./NavList.css";
const NavList = ({setOpen}) => {
  return (
    <>
      {

// onClick={()=>setOpen(false)}
        NavListConstant.map((item) => (
          <Link 
          
          onClick={() => {
            if (window.innerWidth <= 724) { // Adjust breakpoint as needed
              setOpen(false);
            }
          }}
          
          key={item.id} to={item.link} smooth={true} duration={500} className="navLink">
            {item.label}
          </Link>
        )) //control space
      }
    </>
  );
};

export default NavList;
