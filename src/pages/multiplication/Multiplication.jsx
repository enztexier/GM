import React, { useState, useEffect } from 'react';
import Checkbox from '../../components/checkbox/Checkbox';
import Shuffle from './components/shuffle/Shuffle';
import MultiplicationInfinity from './components/multiplicationinfinity/MultiplicationInfinity';
import LinearInfinity from './components/linearinifinity/LinearInfinity';
import Navbar from '../../components/navbar/Navbar';
import './multiplication.css';
import Button from '../../components/button/Button';
import Range from '../../components/range/Range';

const Multiplication = () => {

    const table = {
        1: {
            digit: 1,
            booleanState: false
        },
        2: {
            digit: 2,
            booleanState: false
        },
        3: {
            digit: 3,
            booleanState: false
        },
        4: {
            digit: 4,
            booleanState: false
        },
        5: {
            digit: 5,
            booleanState: false
        },
        6: {
            digit: 6,
            booleanState: false
        },
        7: {
            digit: 7,
            booleanState: false
        },
        8: {
            digit: 8,
            booleanState: false
        },
        9: {
            digit: 9,
            booleanState: false
        },
        10: {
            digit: 10,
            booleanState: false
        }
    }


    const [tableState, setTableState] = useState(table)
    const [selectTable, setSelectTable] = useState([])
    const [shuffledArray, setShuffledArray] = useState([])
    const [time, setTime] = useState(2)
    const [infinityShuffle, setInfinitySuffle] = useState(false)
    const [linearInfinit, setLinearInfinit] = useState(false)
    const [checkboxValidation, setCheckboxValidation] = useState(false)

    const liste = Object.keys(tableState)
        .map((val, i) =>
            <Checkbox
                label={tableState[val].digit}
                value={tableState[val].booleanState}
                onChange={() => Tb(val)}
                key={i}
                required
            />
        )

    const Tb = (val) => {

        const cur = { ...tableState }
        cur[val].booleanState = !cur[val].booleanState;
        setTableState(cur)

        if (tableState[val].booleanState === true) {
            setSelectTable(cur => [...cur, val])
        }
        else {
            const index = selectTable.indexOf(val)
            if (index > -1) {
                selectTable.splice(index, 1)
            }
        }
    }

    const shuffleMachine = () => {

        let temporary = [];

        if (selectTable.length > 0) {
            for (const element of selectTable) {

                for (let i = 1; i < 11; i++) {
                    let result = element * i
                    temporary.push([element, i.toString(), result.toString()])
                }
            }
            setShuffledArray(temporary.sort(() => Math.random() - 0.5))
            setCheckboxValidation(false)
        }
        else {
            setCheckboxValidation(true)
        }

    }

    const suffleInfinity = () => {

        let temporary = [];

        if (selectTable.length > 0) {
            for (const element of selectTable) {

                for (let i = 1; i < 11; i++) {
                    let result = element * i
                    temporary.push([element, i.toString(), result.toString()])
                }
            }
            setInfinitySuffle(temporary)
            setCheckboxValidation(false)
        }
        else {
            setCheckboxValidation(true)
        }
    }

    const linearInfinity = () => {

        let temporary = [];

        if (selectTable.length > 0) {
            for (const element of selectTable) {

                for (let i = 1; i < 11; i++) {
                    let result = element * i
                    temporary.push([element, i.toString(), result.toString()])
                }
            }
            setLinearInfinit(temporary)
            setCheckboxValidation(false)
        }
        else {
            setCheckboxValidation(true)
        }
    }

    const backEnd = () => {
        console.log("hello back")
        setShuffledArray([])
        setSelectTable([])
        setTime(2)
        setTableState(table)
        setInfinitySuffle(false)
        setLinearInfinit(false)
        setCheckboxValidation(false)
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2>Table de Multiplication</h2>

            {checkboxValidation === true && <p style={{color: 'red'}}>choisir une table</p>}

            <div className='box-checkbox'>
                {liste}
            </div>

            <Range time={time} setTime={setTime}></Range>
            <h5>{time} secondes</h5>

            <div className='box-mode'>
                <Button onClick={shuffleMachine}>aléatoire</Button>
                <Button onClick={suffleInfinity}>aléatoire infinie</Button>
                <Button onClick={linearInfinity}>linéaire infinie</Button>
            </div>

            {shuffledArray.length > 0 && <div className='superposition'> <Shuffle shuffledArray={shuffledArray} time={time} backEnd={backEnd}></Shuffle> </div>}

            {infinityShuffle.length > 0 && <div className='superposition'> <MultiplicationInfinity infinityShuffle={infinityShuffle} time={time} backEnd={backEnd}></MultiplicationInfinity> </div>}

            {linearInfinit.length > 0 && <div className='superposition'> <LinearInfinity linearInfinit={linearInfinit} time={time} backEnd={backEnd}></LinearInfinity> </div>}

        </div>
    );
};

export default Multiplication;

/****
 * 
 * 
 * 
 * 


           <input type="range" min="1" max="20" value={time} onChange={(e) => setTime(e.target.value)}></input>

 {shuffledArray.map(val => <p key={val}>{val}</p>)}

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






Math.floor((time * 50 / 100 / 1000) % 60)

 * 
 * 
 * 
 */