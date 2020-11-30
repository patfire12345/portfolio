import React from 'react';
import Title from "../Title";
import texts from "./ProjectText";
import '../CSS Pages/Projects.css';

// Contains my projects
const Projects = () => {

    return(
    <div className='projects' id='/projects'>
        
        <Title title="Projects"/>
        <br/>

        {   
            texts.map(text => 
            <div>
                <h1 className="text-black">{text.title}</h1>
                <div className='text'>
                    {text.body}
                </div>

                <br/>

                <a href={text.link} target="_blank">
                    <img src={text.img} className={text.cName}/>
                    <br/>
                </a>
                
                <br/>
                <br/>
                <br/>
            </div>
        )}
    </div>
);}

export default Projects;