import React from'react';
import '../CSS Pages/Awards.css';
import {MarkGithubIcon as Github, PlayIcon as Youtube} from '@primer/octicons-react';
import texts from './AwardsText';

// Some of my previous achievements
const Awards = () => {
    return(
        <div className='awards'>
            <nav className='title' id='/awardsandcertificates'>Extracurriculars</nav>
            <h1 className='text-black'>CS50: Introduction to Game Design</h1>
            <div className="text">Here are some projects that I completed during Harvard's video game design course!</div>

            <br/>

            {
                texts.map( text =>
                    <div>
                        <h1 className='text-black'>{text.title}</h1>
                        <a href={text.youtube}>
                            <img src={text.img} className="assignment" />
                        </a>

                        <div className="icons-border">
                            <a href={text.github}>
                                <Github size={32} className='icons-github'/>
                            </a>

                            <a href={text.youtube}>
                                <Youtube size={32} className='icons-youtube'/>
                            </a>
                        </div>

                        <br/>
                        <br/>
                        <br/>

                    </div>
                )
            }
        </div>
    )
}

export default Awards;