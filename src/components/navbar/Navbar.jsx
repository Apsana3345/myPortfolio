import React from "react";
import "./Navbar.css";
import Wrapper from "../layout/Wrapper";
import NavList from "../smallComponent/navList/NavList";
import Hamburger from "../smallComponent/hamburger/Hamburger";

const Navbar = () => {
  return (
    <nav className="navbar" >
      <div className="container-nav">
        <Wrapper>
          <div className="nav-main">
            <section className="nav-logo">
              <h1 className="logo-title">A.<span className="logo-end">Sharma</span></h1>
            </section>
            <section className="navList">
              <NavList />
            </section>
            <section>
              <button className="resume-btn">Resume</button>
            </section>
            {/* For mobile device */}
            <section className="hamburger-menu">
              <Hamburger/>
            </section>
          </div>
        </Wrapper>
      </div>
    </nav>
  );
};

export default Navbar;
