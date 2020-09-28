import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () => {

    return (
        <ReactBootstrap.Table borderless className='text' size="sm">
            <thead className='text'>
                <tr>
                    <th>Languages</th>
                    <th>Frameworks</th>
                    <th>Back-End</th>
                </tr>
            </thead>
            <tbody className='text'>
                <tr>
                    <td>Python</td>
                    <td>React</td>
                    <td>MongoDB</td>
                </tr>
                <tr>
                    <td>Java</td>
                    <td>Node</td>
                    <td>SQL</td>
                </tr>
                <tr>Javascript</tr>
                <tr>Lua</tr>
                <tr>Arduino</tr>
                <tr>C</tr>
                <tr>C#</tr>
                <tr>MATLAB</tr>
            </tbody>
        </ReactBootstrap.Table>
    )};

export default Table;