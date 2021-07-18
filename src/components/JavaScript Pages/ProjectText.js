import React from "react";
import Dijkstra from '../../Images/Dijkstra.PNG';
import AndroidApp from '../../Images/Android App.PNG';
import Sudoku from "../../Images/Sudoku.PNG";
import SmartHumidifier from "../../Images/SmartHumidifier.jpg";
import RentAppsVideo from "../../Videos/RentappsFrontendDemo.mp4";
import PathfinderVideo from "../../Videos/PathfinderAlgorithm.mp4"

// Project Descriptions
const texts = [
    {title:'RentApps',
    body: 'As an observation of the housing business in Ottawa, I cofounded a React Native application that standardizes the leasing the process using React Native and MongoDB.',
    link: 'https://github.com/patfire12345/rentapps-frontend',
    // videoImg: AndroidApp,
    video: RentAppsVideo,
    cName: "rentappslogin"},

    {title:'Smart Humidifier',
    body: 'For my final project in ELG 3336 (Electronics for Mechanical Engineers), I created an environmental friendly, cost-efficient, smart humidifier that activates upon reaching a specific input temperature and humidity.',
    link: 'https://github.com/patfire12345/SmartHumidifier',
    img: SmartHumidifier,
    cName: "smarthumidifier"},
    
    {title:'Pathfinder Algorithm',
    body:"This project is an implementation of Dijkstra's algoithm. It finds the shortest path between a designated start point and end point. The code is from the pygame module (Python).",
    link:"https://github.com/patfire12345/Pathfinder",
    video: PathfinderVideo,
    cName: "dijkstra",},

    {title:'Sudoku Solver',
    body: 'As a side project, I implemented a sudoku solver. The user can play a normal game of sudoku, and upon pressing the solution button, the backtracking algoithm will solve the displayed sudoku.',
    link: 'https://github.com/patfire12345/Sudoku',
    img: Sudoku,
    cName: "sudoku"},
]

export default texts;