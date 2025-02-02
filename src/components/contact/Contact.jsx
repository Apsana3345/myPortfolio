import React from "react";
import "./Contact.css";
import Wrapper from "../layout/Wrapper";
// import { Icon } from "@iconify/react/dist/iconify.js";
const Contact = () => {


 
  
  return (
    <section className="contact-section" id="contact">
      <Wrapper>
        <div className="contact">
          <div className="text">
            <p className="contact-title">Contact</p>
            <span className="nameContactIntro">
              You can send me message here
            </span>
          </div>

          <div className="contact-main">
            <div className="form">
              <form
                action="https://getform.io/f/bzyyxnma"
                method="post"
                className="inputValue"
              >
                <input type="text" placeholder="Name" id="name" name="name" defaultValue={""} />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  defaultValue={""} 
                />
                <textarea
                  type="text"
                  placeholder="Your Message"
                  id="textarea"
                  cols={40}
                  rows={5}
                  name="message" defaultValue={""} 
                ></textarea>
                <button className="btn-form" value="submit">
                  Send
                </button>
              </form>
              

              {/* {ContactFormList.map((item)=>{
   <div className="inputValue" key={item.id}>
     <input type="text"  placeholder={item.text} />
   </div>
  })} */}
            </div>
            {/* <div className="lineE"></div> */}
            {/* <div className="information">
  <div className="Address">
    <div className="logoAddress">
     
    <Icon  className='icon-name' icon="mdi:address-marker-outline" />
    </div>
    <div className="textAddress">
      <p>Address</p>
      <p>Rupandehi,Nepal</p>
      
    </div>
  </div>
  <div className="Phone">
  <Icon className='icon-name' icon="ic:sharp-phone" />
  <div className="textPhone">
    <p>Phone</p>
    <a href="tel:+9779815426726" className="phone-number">+977 9815426726</a>
  </div>
  </div>
  <div className="email">
  <Icon  className='icon-name' icon="ic:outline-email" />
  <div className="emailcontainer">
    <p>Email</p>
    <a href='mailto:apsana20580912@gmail.com' className='emailText'>apsana20580912@gmail.com</a>
  </div>
  </div>
</div> */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
