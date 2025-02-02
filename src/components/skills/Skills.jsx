import React from "react";
import Wrapper from "../layout/Wrapper";
import Image2 from '../../assets/hero2.png'
import { skillsList } from "../../constant/SkillsConstant";
import { Icon } from "@iconify/react";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills-main" id="skills">
<img className="image-2" src={Image2} alt="" />
      <Wrapper>
        <p className="skill-title">Skills</p>
        <div className="skill-card" >
          {skillsList.map((item) => (
            <div className="skill" key={item.id}>
              <Icon className="skill-icon" icon={item.icon} />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
