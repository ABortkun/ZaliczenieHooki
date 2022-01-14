import React, {useState} from "react";
import './Licznik.js';
import '../styles/Summary.css';


const Summary = ({ productsNumber, productsName }) => {
const [counter, addNumber] = useState([]);
const [title, addName] = useState([]);

const AddCounter = (NewNumber) => {
    counter.push(NewNumber)
}

const AddName = (NewNumber) => {
    title.push(NewNumber)
}

    return (
        <div className="main">
            { AddCounter(productsNumber) }
            { AddName(productsName) }
            <div className="results">
                    <ul>
                        { counter.map(prod => <li key={prod}>{prod}</li>)}
                    </ul>
                    <ul>
                        { title.map(prod => <li key={prod}>{prod}</li> )}
                    </ul>
            </div>
        </div>
        
    );
 }
export default Summary;
