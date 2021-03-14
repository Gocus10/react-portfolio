import React from "react";
import Card from "../card/index";


function Portfolio(props){
  return (
    <div className="grid-wrapper">
      {console.log(props.projectList)}
      <h1>Portfolio</h1> 
    <div className="project-wrapper">    
      {
        (props.projectList).map(project => {
          return(
            <Card
            name={project.name}
            image={project.image}
            description={project.description}
            key={project.id}
            link={project.link}
            />
          )
        })
      }
    </div> 
    </div>
  )
  
};
    


export default Portfolio;
