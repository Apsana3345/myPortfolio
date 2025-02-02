import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavListConstant } from "../../../constant/NavConstant";
import "./NavList.css";
const NavList = ({setOpen}) => {
  const [activeLink, setActiveLink] = useState(null);
  const handleClick = (id) => {
    setActiveLink(id);
    if (window.innerWidth <= 724) {
      setOpen(false); 
    }
  };
  return (
    <>
      {
        NavListConstant.map((item) => (
          <Link 
          className={`navLink ${activeLink === item.id ? "active" : ""}`} // Apply active class
          onClick={() => handleClick(item.id)} 
          key={item.id} to={item.link} smooth={true} duration={500} >
            {item.label}
          </Link>
        )) 
      }
    </>
  );
};

export default NavList;
