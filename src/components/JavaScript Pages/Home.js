import React from 'react';
import '../CSS Pages/Home.css';
import Table from './Table';
import School from './School';


// Home page 
const Home = () => {
    
    return (

        // Includes Home
        <div className='home' id="/home">
            <br/><br/><br/><br/>
            <div className="name"> PATRICK HUANG <br/></div>
            <div className="job"> SOFTWARE ENGINEER </div>
            <br /> <br/>

            <School/>
            <br /> <br/>

            <ul className='text'>Here are some of my skills:</ul> <br />

            <Table/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    );
}

export default Home;