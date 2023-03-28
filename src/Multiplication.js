import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Multiplication = () => {

    const tableIndicative = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [tableHistory, setTableHistory] = useState([]);

    let randomNumber = (max) => {
        return Math.floor(Math.random() * max);
      }

    const Tb = (val) => {
        console.log(val);
        let a = randomNumber(11);
        if (a === 0){
            console.log("000");
            a = randomNumber(11);
        }
        else {
            let b = val;
            console.log(a);
            let result = a * b;
            let display = <p>{b} * {a} = {result}</p>;
            setTableHistory(display);
        }
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Multiplication</h1>
            {tableIndicative.map(val => <button key={val} onClick={() => Tb(val)}>Table de {val}</button> )}

            <br></br>
            {tableHistory}
        </div>
    );
};

export default Multiplication;

/****
 * 




 * 
 * 
 * 
 */