import React from "react";
import Image1 from '../../assets/hero1.png'
import Image2 from '../../assets/hero2.png'
import Image3 from '../../assets/heroZigzag.png'
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import Image from "../../assets/gitProfile.jpg"
import Wrapper from "../layout/Wrapper";
const Hero = () => {
  return (
    <section className="hero-section">
      <Wrapper>
        <div className="hero-main">
            <img className="image-1" src={Image1} alt="" />
            <img className="image-2" src={Image2} alt="" />
            <img className="image-3" src={Image3} alt="" />
          <div className="intro">
            <p className="para-First">Hi my name is <br/> <span className="nameIntro">
                 Apsana Sharma</span> </p>
            <p className="para-intro">
              I am Frontend{" "}
              <span>
                <Typewriter
                  words={["Developer.", "Designer."]}
                  loop={5}
                  cursor
                  cursorStyle=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p className="description">Currently studying Bsc.Csit at Butwal Multiple Campus. Eager to learn, code and grow. </p>
          </div>
          <div className="heroImage">
            <img className="imageApsana" src={Image} width="300px" height="300px"></img>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
