import React from "react";
import Wrapper from "../layout/Wrapper";
import { EducationList } from "../../constant/EducationConstant";
import './Education.css'
const Education = () => {
  return (
    <section className="education-main">
      <Wrapper>
        <p className="skill-title">Education</p>
        
        <div className="education">
        
          {EducationList.map((item,index) => (
            <div  className="ForLine">
            <div className="educationTag" key={item.id}>
              <p className="para">{item.course}</p>
              <p className="para">{item.batch}</p>
              <p className="para">{item.school}</p>
            </div>
            {index < EducationList.length - 1 && <div className="line"></div>}
            </div>
          ))}
          
         
        </div>
        {/* <div className="line"></div> */}
        
      </Wrapper>
    </section>
  );
};

export default Education;
