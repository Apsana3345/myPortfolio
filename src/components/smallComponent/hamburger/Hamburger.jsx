import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Hamburger.css";
import NavList from "../navList/NavList";
const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="hamburger-main">
      <button  className="hamburger-btn"  onClick={() => setOpen(!open)}>
        
       {open? <Icon className="hamburger-icon" icon="bitcoin-icons:cross-filled" />:<Icon className="hamburger-icon" icon="pajamas:hamburger" />}
      </button>
      {open &&<div className="hamburger-mobile-list">
<NavList setOpen={setOpen}/>
      </div>}
    </div>
  );
};

export default Hamburger;
