import React, {useState} from 'react';
import Title from "../Title";
import { AiFillCaretRight as Right } from "react-icons/ai";
import texts from "./ProjectText";
import '../CSS Pages/Projects.css';
import Revolver from './Revolver';

// Contains my projects
const Projects = () => {

    return(
    <div className='projects' id='/projects' style={{minHeight: "800px"}}>
        
        <Title title="Projects"/>
        <br/>
        <Revolver/>
    </div>
);}

export default Projects;