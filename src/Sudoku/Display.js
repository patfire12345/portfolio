import React, {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {sudoku:[this.props.board]}
    }

    render() {
    const {sudoku} = this.state;

    return(
        <ReactBootstrap.Table striped borderless hover>
            
            <tbody>
            {sudoku.map((row,rIndex) => 
                <tr>{row.map((column,cIndex) => 
                    <td>{column.map((num,numIndex) => 
                        <div>
                        <td>{num}</td>  
                        </div>
                        )}</td>
                    )}</tr>
            )}
            </tbody>

        </ReactBootstrap.Table>
        );
    }
}

export default Display;

/* */