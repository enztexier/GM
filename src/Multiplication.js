import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Multiplication = () => {

    const tableIndicative = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [tableHistory, setTableHistory] = useState([]);
    const [result, setResult] = useState([]);
    const [time, setTime] = useState(1000);
    const [valInterval, setValInterval] = useState(0);

    let randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }



    const Tb = (val) => {


        setResult("");
        setValInterval(val);
        let a = randomNumber(11);
        if (a === 0) {
            console.log("000");
            a = randomNumber(11);
        }
        else {
            let b = valInterval;
            console.log(a);
            let result = a * b;
            let display = <p>{b} * {a} =  </p>;
            setTimeout(() => {
                setResult(result);
            }, time);
            setTableHistory(display);
        }

        return setInterval(Tb, result + 2000);

    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Multiplication</h1>
            {tableIndicative.map(val => <button key={val} onClick={() => Tb(val)}>Table de {val}</button>)}
            <input type="range" min="100" max="5000" value={time} onChange={(e) => setTime(e.target.value)}></input>
            <h1>{time}</h1>

            <br></br>
            {tableHistory}{result}
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