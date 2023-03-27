import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Checkbox from './Checkbox';

const Calcul = () => {
  
    const [checkedPositive, setCheckedPositive] = useState(false);
    const [checkedNegative, setCheckedNegative] = useState(false);
    const [checkedDivision, setCheckedDivision] = useState(false);
    const [checkedMultiplication, setCheckedMultiplication] = useState(false);
    const [operator, setOperator] = useState([]);

    const [nbrDigitsOne, setNbrDigitsOne] = useState([]);
    const [nbrDigitsTwo, setNbrDigitsTwo] = useState([]);

    const [final, setFinal] = useState();

    const [valueCalcul, setValueCalcul] = useState([]);




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

    }, [checkedPositive]);


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

    }, [checkedNegative]);

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

    }, [checkedDivision]);

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

    }, [checkedMultiplication]);

    const addDigit = () => {
        setNbrDigitsOne(cur => [...cur, 0]);
    }

    const popDigit = () => {
        setNbrDigitsOne((cur) => cur.slice(0, cur.length - 1));
        console.log(nbrDigitsOne);
    }

    const addDigit2 = () => {
        setNbrDigitsTwo(cur => [...cur, 0]);
    }

    const popDigit2 = () => {
        setNbrDigitsTwo((cur) => cur.slice(0, cur.length - 1));
        console.log(nbrDigitsTwo);
    }

    let randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    let indexRandom = 0;

    const calculFinal = () => {

        setInterval(() => {
            indexRandom = randomNumber(operator.length);
            let f = operator[indexRandom];

            console.log(nbrDigitsOne);
            let nine = nbrDigitsOne.map((n) => n + 9);
            let n = nine.join('');
            console.log(n);
 
            let one = Math.floor(Math.random() * n);
            let two = Math.floor(Math.random() * 99);
            let result = one + two;
            let b = <p>{one} {f} {two} = {result}</p>;

            setFinal(b);

        }, 1000);

    }


    const addValue = () => {
        const addDigit = console.log("laaaaa");
        const a = '<button onClick={addDigit}>add digit</button> <button onClick={popDigit}>pop digit</button>';
        setValueCalcul(cur => [...cur, a]);
        console.log(valueCalcul);
        

    }

    return (
        <div>
            <h1>Calcul</h1>
            <Link to="/copyright">Copyright</Link>
            <Link to="/">Home</Link>
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

            <br></br>

            <button onClick={addValue}>addValue</button>
            {valueCalcul.map(value => <div className="content" dangerouslySetInnerHTML={{__html: value}}></div>)}

            <br></br>


            <button onClick={addDigit}>add digit</button>
            <button onClick={popDigit}>pop digit</button>
            <p>{nbrDigitsOne}</p>

            <button onClick={addDigit2}>add digit</button>
            <button onClick={popDigit2}>pop digit</button>
            <p>{nbrDigitsTwo}</p>

            <button onClick={calculFinal}>cacul</button>
            <p>{final}</p>

            <br></br>

        </div>
    );
};

export default Calcul;


/*** *
 * 
 * 
 


    const [nbrDigits, setNbrDigits] = useState([]);
    const addDigit = () => {
        setNbrDigits(cur => [...cur, 0]);
    }

    const popDigit = () => {
        setNbrDigits((cur) => cur.slice(0, cur.length - 1));
        console.log(nbrDigits);
    }
    <p>{nbrDigits}</p>



            const [nbr1, setNbr1] = useState(0);
            <input type="range" min="0" max="100" value={nbr1} onChange={(e)=>setNbr1(e.target.value)}></input>
            <h1>{nbr1}</h1>




            const [calcul, setcalcul] = useState(false);
             const GetRandomInt = () => {
        let one = Math.floor(Math.random() * 99);
        let two = Math.floor(Math.random() * 99);
        let result = one + two;
        let b = <p>{one} + {two} = {result}</p>;
        setcalcul(b);
        console.log(operator);
    }



 * 
 * **/