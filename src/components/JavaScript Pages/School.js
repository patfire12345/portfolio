import React from 'react';
import '../CSS Pages/School.css';

// Shows my school schedule and some insight on some courses
const School = () => {
    return(
    <div className="courses" id='/school'>
        <div className='text'>
            I am currently a third year student attending the 
            <div className="text-green">
                <a href='https://www.uottawa.ca/en' target="_blank">
                    University of Ottawa,
                </a>
            </div>

            studying 

            <div className="text-green">
                <a href='https://engineering.uottawa.ca/undergraduate-programs/courses/mechanical-biomedical-ct-2019' target="_blank">
                    Biomedical Mechanical Engineering and Computing Technology
                </a>
            </div>

            
        </div>
        
    </div>
    );
}

export default School;