import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";
import Wrapper from "../layout/Wrapper";
import { FooterList } from "../../constant/FooterConstant";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer-main"  >
          <section className="footer-section">
            {FooterList.map((item) => (
              <Link className="footer-link" key={item.id} to={item.link}>
                <Icon icon={item.icon} />
              </Link>
            ))}
          </section>
          <hr  className="footer-line"/>
          <section className="footer-para">
            <p> ©2024 Build by apsana-sharma, Nepal</p>
          </section>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
