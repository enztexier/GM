import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Checkbox from './Checkbox';
import { useState, useEffect } from 'react';

const Home = () => {

    const [checkedPositive, setCheckedPositive] = useState(false);
    const [checkedNegative, setCheckedNegative] = useState(false);
    const [checkedDivision, setCheckedDivision] = useState(false);
    const [checkedMultiplication, setCheckedMultiplication] = useState(false);
    const [operator, setOperator] = useState([]);
    const [calcul, setcalcul] = useState(false);

    const handleChangeOne = () => {
        setCheckedPositive(!checkedPositive);
    };

    const handleChangeTwo = () => {
        setCheckedNegative(!checkedNegative);
    };

    const handleChangeThree = () => {
        setCheckedDivision(!checkedDivision);
    };

    const handleChangeFour = () => {
        setCheckedMultiplication(!checkedMultiplication);
    };

    const GetRandomInt = () => {
        let one = Math.floor(Math.random() * 99);
        let two = Math.floor(Math.random() * 99);
        let result = one + two;
        let b = <p>{one} + {two} = {result}</p>;
        setcalcul(b);
        console.log(operator);
    }

    useEffect(() => {

        if (checkedPositive === true) {
            operator.push('+');
            console.log(operator);
        }
        else {
            const index = operator.indexOf('+');
            if (index > -1) { // only splice array when item is found
                operator.splice(index, 1);
                console.log(operator);
            }
        }

    },[checkedPositive]);


    useEffect(() => {

        if (checkedNegative === true) {
            operator.push('-');
            console.log(operator);
        }
        else {
            const index = operator.indexOf('-');
            if (index > -1) {
                operator.splice(index, 1);
                console.log(operator);

            }
        }

    },[checkedNegative]);

    useEffect(() => {

        if (checkedDivision === true) {
            operator.push('/');
            console.log(operator);
        }
        else {
            const index = operator.indexOf('/');
            if (index > -1) {
                operator.splice(index, 1);
                console.log(operator);

            }
        }

    },[checkedDivision]);

    useEffect(() => {

        if (checkedMultiplication === true) {
            operator.push('*');
            console.log(operator);
        }
        else {
            const index = operator.indexOf('*');
            if (index > -1) {
                operator.splice(index, 1);
                console.log(operator);

            }
        }

    },[checkedMultiplication]);

    return (
        <div>
            <h1>Home</h1>
            <Link to="/copyright">Copyright</Link>
            <br></br>
            <Checkbox
                label="+"
                value={checkedPositive}
                onChange={handleChangeOne}
            />

            <Checkbox
                label="-"
                value={checkedNegative}
                onChange={handleChangeTwo}
            />

            <Checkbox
                label="/"
                value={checkedDivision}
                onChange={handleChangeThree}
            />

            <Checkbox
                label="*"
                value={checkedMultiplication}
                onChange={handleChangeFour}
            />


            <button onClick={GetRandomInt}>click</button>
            {calcul}


        </div>
    );
};

export default Home;


/*** *
 * 
 * 

            <input type="range" id="volume" name="volume"
         min="0" max="11"></input>




 * 
 * **/