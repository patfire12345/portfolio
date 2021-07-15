import React, {useEffect, useState} from 'react'
import { AiFillCaretRight as Right, AiFillCaretLeft as Left } from 'react-icons/ai';
import texts from './ProjectText'

function Revolver() {
    // represents the project index
    const [counter, setCounter] = useState(0);
    return (
        <div style={{textAlign: "center"}}>
            <button 
            style={{position: "absolute", right: "1000px", top: "1300px"}}
            onClick={() => {
                if (counter <= 0) {
                    setCounter(texts.length-1);
                }
                else {
                    setCounter(counter - 1)
                }
            }}>
                <Left/>
            </button>
            <img src={texts[counter].img} style={{width:"25%", height: "25%", margin: "10px"}}/>
            <button 
            style={{position: "absolute", right: "200px", top: "1300px"}}
            onClick={() => {
                if (counter >= texts.length-1) {
                    setCounter(0);
                }
                else {
                    setCounter(counter + 1)
                }
            }}>
                <Right/>
            </button>
        </div>
    )
}

export default Revolver
