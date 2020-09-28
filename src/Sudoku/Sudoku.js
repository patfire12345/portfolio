import React, { Component } from 'react';
import Solve from './Solve';
import Display from './Display';


class Sudoku extends Component {

  state = {clicked: false,}

  render() {

  const board = [[0,0,0,0,0,3,0,2,7],
                [0,0,0,0,6,7,0,0,0],
                [0,9,0,5,0,0,0,8,3],
                [6,0,9,4,3,0,0,0,0],
                [0,5,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,5,0],
                [0,8,0,0,4,0,0,0,0],
                [0,3,7,0,0,2,0,9,0],
                [9,0,2,0,0,0,0,6,0]] 
                

    return(
    <div>
      <div className="title">Sudoku Solver</div>
      
      <button className='solution'>
        Solution
      </button>
      
    <Display className="display" board = {board}/>
    <Solve className="solve" board = {board} />
    
    </div>
    );
  }
}



export default Sudoku;
