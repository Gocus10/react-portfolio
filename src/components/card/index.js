import React from "react";


function Card(project){
  return(
    <div className="box">
      <div className="image-container">
        <img alt={project.name} src={project.image}/>
      </div>
      <div className="content">
        <ul>
          <li>
             <a href={project.link} className="box-text">{project.name}</a>
          </li>
          <li>
            <a className="box-text">{project.description}</a>
          </li>
        </ul>
      </div>
    </div>
  )

};

export default Card;
