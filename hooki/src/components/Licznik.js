import React, {useState} from "react";
import ReactDOM from "react-dom";

import '../styles/Licznik.css';
import Button from '@material-ui/core/Button';

const Licznik = ({title, onProductSubmit2}) => {
    const [counter, setCounter] = useState(0);
const removeFromCounter = () => {
  if (counter !== 0) {
    setCounter(counter - 1);
  }
}

const sendCounter = (counter) => {
  onProductSubmit2(counter, title);
}

    return (
      <div class="grupa">
        <div>Ilość: {counter}</div>
        <div>
        <Button onClick={() => removeFromCounter()}>- 1</Button>
        <Button onClick={() => setCounter(counter + 1)}>+ 1</Button>
        <Button onClick={() => sendCounter(counter)}>Dodaj</Button>
        </div>
      </div>
    );
  
  }
  export default Licznik
  
