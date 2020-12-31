import Dijkstra from '../../Images/Dijkstra.PNG';
import AndroidApp from '../../Images/Android App.PNG';
import Sudoku from "../../Images/Sudoku.PNG";
import SmartHumidifier from "../../Images/SmartHumidifier.jpg";

// Project Descriptions
const texts = [
    {title:'Smart Humidifier',
    body: 'For my final project in ELG 3336 (Electronics for Mechanical Engineers), I created an environmental friendly, cost-efficient, smart humidifier that activates upon reaching a specific input temperature and humidity.',
    link: 'https://github.com/patfire12345/SmartHumidifier',
    img: SmartHumidifier,
    cName: "smarthumidifier"},
    
    {title:'Pathfinder Algorithm',
    body:"This project is an implementation of Dijkstra's algoithm. It finds the shortest path between a designated start point and end point. The code is from the pygame module (Python).",
    link:"https://github.com/patfire12345/Pathfinder",
    img: Dijkstra,
    cName: "dijkstra",},

    {title:'Engineers Without Borders Android App',
    body:'As the VP of Technology, I lead the development of an Android app for uOttawa Engineers Without Borders. The app was developed using Android Studio (Java), and was designed for high-school students to explore sustainable options at uOttawa.',
    link: "https://framer.com/share/App--gED9gB5T9SMtIDHUX3bA",
    img: AndroidApp,
    cName: "androidapp",},

    {title:'Sudoku Solver',
    body: 'As a side project, I implemented a sudoku solver. The user can play a normal game of sudoku, and upon pressing the solution button, the backtracking algoithm will solve the displayed sudoku.',
    link: 'https://github.com/patfire12345/Sudoku',
    img: Sudoku,
    cName: "sudoku"},
]

export default texts;