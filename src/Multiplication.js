import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';

const Multiplication = () => {

    //const tableIndicative = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const table = {
        table1: {
            digit: 1,
            booleanState: false
        },
        table2: {
            digit: 2,
            booleanState: false
        },
        table3: {
            digit: 3,
            booleanState: false
        },
        table4: {
            digit: 4,
            booleanState: false
        },
        table5: {
            digit: 5,
            booleanState: false
        },
        table6: {
            digit: 6,
            booleanState: false
        },
        table7: {
            digit: 7,
            booleanState: false
        },
        table9: {
            digit: 9,
            booleanState: false
        },
        table10: {
            digit: 10,
            booleanState: false
        }
    }


    const [tableState, setTableState] = useState(table)

    const liste = Object.keys(tableState)
        .map(val => 
        <Checkbox
            label={" Table de " + tableState[val].digit}
            value={tableState[val].booleanState}
            onChange={() => Tb(val)}
            key={val}
        />
        )

    const Tb = (val) => {

        console.log(tableState[val].booleanState);

        const cur = {... tableState}
        cur[val].booleanState = !cur[val].booleanState;
        setTableState(cur);

        console.log(tableState[val].booleanState);
        console.log(tableState);

    }

    //const [tableHistory, setTableHistory] = useState([]);
    //const [result, setResult] = useState([]);
    const [time, setTime] = useState(1000);
    //const [storyTraining, setStoryTraining] = useState([]);


    let randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Multiplication</h1>

            {liste}

            <input type="range" min="100" max="5000" value={time} onChange={(e) => setTime(e.target.value)}></input>
            <h1>{time}</h1>



        </div>
    );
};

export default Multiplication;

/****
 * 


    const Tb = (val) => {

        let random = randomNumber(11);
        console.log(val);
        if (random === 0) {
            console.log("000");
            random = randomNumber(11);
        }
        else {
            let result = random * val;
            let display = <p>{val} * {random} =  </p>;
            setResult(result);
            setTableHistory(display);
        }

    }





            {tableIndicative.map(val => <Checkbox
                key={val}
                label={val}
                value={checked}
                onChange={() => Tb(val)}
            />
            )}



                        <br></br>
            {tableHistory}{result}








 * 
 * 
 * 
 */