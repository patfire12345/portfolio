import React, {useState} from 'react';
import Title from "../Title";
import { AiFillCaretRight as Right } from "react-icons/ai";
import texts from "./ProjectText";
import '../CSS Pages/Projects.css';

// Contains my projects
const Projects = () => {

    const [loadButton, setLoadButton] = useState(false);

    const showLoadButton = () => {
        if (!loadButton) {
            return (
                <button onClick={() => setLoadButton(true)} className='loadButton'>Load More</button>
            );
        }
    }

    // const loadProjects = () => {
    //     {loadButton ? 
    //         texts.map(text => function () {
    //         return (
    //             <div>
    //                 <h1 className="text-black">{text.title}</h1>
    //                 <div className='text'>
    //                     {text.body}
    //                 </div>

    //                 <br/>

    //                 <a href={text.link} target="_blank">
    //                     <img src={text.img} className={text.cName}/>
    //                     <br/>
    //                 </a>
                    
    //                 <br/>
    //                 <br/>
    //                 <br/>
    //             </div>
    //         )}):
    //     texts.map((text,index) => function () {
    //         return (
    //         (index < 3) ?
    //         (<div>
    //             <h1 className="text-black">{text.title}</h1>
    //             <div className='text'>
    //                 {text.body}
    //             </div>

    //             <br/>

    //             <a href={text.link} target="_blank">
    //                 <img src={text.img} className={text.cName}/>
    //                 <br/>
    //             </a>
                
    //             <br/>
    //             <br/>
    //             <br/>
    //         </div>) : null
    //     )})} 
    // }

    return(
    <div className='projects' id='/projects'>
        
        <Title title="Projects"/>
        <br/>

        {/* need to turn into function */}
        {loadButton ? texts.map(text => 
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

                {/* <Right onClick={() => text.img2 ? }/> */}
                
                <br/>
                <br/>
                <br/>
            </div>
        ):
        texts.map((text,index) => 
            (index < 3) ?
            (<div>
                <h1 className="text-black">{text.title}</h1>
                <div className='text'>
                    {text.body}
                </div>

                <br/>

                <a href={text.link} target="_blank">
                    <img src={text.img} className={text.cName}/> 
                    <br/>
                </a>

                {/* <Right /> */}
                
                <br/>
                <br/>
                <br/>
            </div>) : null
        )}

        {showLoadButton()}
    </div>
);}

export default Projects;