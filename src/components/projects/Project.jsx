import React from 'react'
import Wrapper from '../layout/Wrapper'
import { ProjectList } from '../../constant/ProjectConstant'
import './Project.css'

import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
const Project = () => {
  return (
<section className='project-main'>
   <Wrapper>
    <p className="skill-title">Projects</p>

<div className="work-list">
{ProjectList.map((item)=>(
    <div className="work" key={item.id}>
<img src={item.img} alt=""   />
<div className="layer">
<h3 className="name">{item.projectName}</h3>
<p className="describe">{item.description}</p>
<Link className='project-link' key={item.id} to={item.link}>
<Icon className='project-icon' icon={item.icon}/>
 </Link>
</div>
    </div>
    
))}
</div>


   </Wrapper>
</section>
  )
}

export default Project
