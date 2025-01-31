import React from "react";
import Wrapper from "../layout/Wrapper";
import { skillsList } from "../../constant/SkillsConstant";
import { Icon } from "@iconify/react";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills-main">
      <Wrapper>
        <p className="skill-title">Skills</p>
        <div className="skill-card">
          {skillsList.map((item) => (
            <div className="skill" key={item.id}>
              <Icon className="skill-icon" icon={item.icon} />
              <p>{item.Label}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Skills;
