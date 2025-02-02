import React from "react";
import "./Contact.css";
import Wrapper from "../layout/Wrapper";
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
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  defaultValue={""}
                />
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
                  name="message"
                  defaultValue={""}
                ></textarea>
                <button className="btn-form" value="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
