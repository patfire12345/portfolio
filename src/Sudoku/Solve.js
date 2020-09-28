import React from 'react';
import Display from './Display';

function Solve({board}) {
    solve(board);

    return(<Display board = {board} />);
}

function inLine(value,row,column,sudoku) {
    for (var i = 0; i < 9; i++) {
        if (i !== row && sudoku[i][column] === value) {
        return true
        }
    };

    for (var j = 0; j < 9; j++) {
        if (j !== column && sudoku[row][j] === value) {
        return true
        }
    };

    return false;
}

function inBox(value,row,column,sudoku) {
    var box_row = Math.floor(row/3)
    var box_column = Math.floor(column/3)

    for (var i = box_row*3; i < box_row*3 + 3; i++) {
        for (var j = box_column*3; j < box_column*3 + 3; j++) {
        if (i !== row && j !== column && sudoku[i][j] === value) {
            return true
        }
        };
    };

    return false;
}

// Recursive function designed to solve the board
function solve(sudoku) {

    // Variables
    var solved = true
    var row = 0
    var column = 0

    // Double for loops to iterate through the list
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++){

            // Found a vacancy
            if (sudoku[i][j] === 0) {
                solved = false
                row = i
                column = j
                break
            }
        };
    };

    // Base case
    if (solved) {
        return true;
    }

    // Recursive case
    else {

        // Iterating through all the possibilities for a given vacancy
        for (var number = 1;number <= 9; number++) {

            // Checks to see if number will fill vacancy
            if (!inLine(number,row,column,sudoku) && !inBox(number,row,column,sudoku)) {

                // Fills vacancy
                sudoku[row][column] = number;

                // Recusion step
                if (solve(sudoku)) {
                    return true;
                }

                // Backtracking step
                sudoku[row][column] = 0
            }

        
        };

        return false;
    }
}

export default Solve;