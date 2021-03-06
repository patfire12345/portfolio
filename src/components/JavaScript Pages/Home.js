import React, {useEffect} from 'react';
import '../CSS Pages/Home.css';
import Table from './Table';
import School from './School';


// Home page 
const Home = () => {

    useEffect(() => {
        document.title = "Patrick Huang";
    }, []);
    
    return (

        // Includes Home
        <div className='home' id="/home">
            <br/><br/><br></br>
            <br/><br/>
            <div className='intro'>Hi, my name is</div>
            <div className="name"> PATRICK HUANG <br/></div>
            <div className='intro'>and I am a frontend developer located in Ottawa, Ontario, Canada</div>
            {/* <div className="job"> SOFTWARE ENGINEER </div> */}
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