import React from "react";
import { NavLink } from "react-router-dom";
import { NavListConstant } from "../../../constant/NavConstant";
import "./NavList.css";
const NavList = () => {
  return (
    <>
      {
        NavListConstant.map((item) => (
          <NavLink key={item.id} to={item.link} className="navLink">
            {item.label}
          </NavLink>
        )) //control space
      }
    </>
  );
};

export default NavList;
