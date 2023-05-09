import React from 'react';
import { useState, useEffect } from 'react';
import Checkbox from '../../components/checkbox/Checkbox';
import Value from './components/value/Value';
import Btnvalue from './components/btnvalue/Btnvalue';
import Navbar from '../../components/navbar/Navbar';

const Calcul = () => {

    const [checkedPositive, setCheckedPositive] = useState(false);
    const [checkedNegative, setCheckedNegative] = useState(false);
    const [checkedDivision, setCheckedDivision] = useState(false);
    const [checkedMultiplication, setCheckedMultiplication] = useState(false);
    const [operator, setOperator] = useState([]);

    const [arrayValue, setArrayValue] = useState([]);
    const [listeValue, setListeValue] = useState([]);

    const [nbrDigitsOne, setNbrDigitsOne] = useState([]);
    const [digits, setDigits] = useState([]);
    const [final, setFinal] = useState();



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
            //setOperator(cur => [...cur, '+'])
        }
        else {
            const index = operator.indexOf('+');
            if (index > -1) {
                operator.splice(index, 1);
            }
        }

    }, [checkedPositive]);

    useEffect(() => {

        if (checkedNegative === true) {
            operator.push('-');
            //setOperator(cur => [...cur, '-'])
        }
        else {
            const index = operator.indexOf('-');
            if (index > -1) {
                operator.splice(index, 1);
            }
        }

    }, [checkedNegative]);

    useEffect(() => {

        if (checkedDivision === true) {
            operator.push('/');
        }
        else {
            const index = operator.indexOf('/');
            if (index > -1) {
                operator.splice(index, 1);
            }
        }

    }, [checkedDivision]);

    useEffect(() => {

        if (checkedMultiplication === true) {
            operator.push('*');
        }
        else {
            const index = operator.indexOf('*');
            if (index > -1) {
                operator.splice(index, 1);
            }
        }

    }, [checkedMultiplication]);




    const AddValue = () => {

        if (arrayValue.length < 10) {
            let id = Date.now()
            let nbr = 1

            const valueObj = {
                id: id,
                nbr: nbr
            }

            setArrayValue(cur => [...cur, valueObj])
        }
        else {
            console.log("add max 10 nbr")
        }

    }

    const DeleteValue = () => {
        const copyArr = [...arrayValue]
        copyArr.pop()
        setArrayValue(copyArr)
    }

    const AddDigit = (id) => {

        const copyArr = [...arrayValue]

        if (copyArr[id].nbr < 10) {
            copyArr[id].nbr++
            setArrayValue(copyArr)
        }
        else {
            console.log("add max 10 digits")
        }

    }

    const DeleteDigit = (id) => {

        const copyArr = [...arrayValue]

        if (copyArr[id].nbr > 1) {
            copyArr[id].nbr--
            setArrayValue(copyArr)
        } else {
            console.log("digit not negative")
        }
    }




    const RandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }


    const callOperator = () => {
        let indexRandom = RandomNumber(operator.length);
        let f = operator[indexRandom];
        return f;
    }



    const CalculFinal = () => {

        let nbrValues = arrayValue.map(val => val.nbr)

        nbrValues.map(val => {
            switch (val) {
                case 1:
                    let one = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
                    setDigits(cur => [...cur, one])
                    console.log(one)
                    break;
                case 2:
                    let two = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
                    setDigits(cur => [...cur, two])
                    console.log(two)
                    break;
                case 3:
                    let three = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                    setDigits(cur => [...cur, three])
                    console.log(three)
                    break;
                case 4:
                    let four = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
                    setDigits(cur => [...cur, four])
                    console.log(four)
                    break;
                case 5:
                    let five = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
                    setDigits(cur => [...cur, five])
                    console.log(five)
                    break;
                case 6:
                    let six = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
                    setDigits(cur => [...cur, six])
                    console.log(six)
                    break;
                case 7:
                    let seven = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
                    setDigits(cur => [...cur, seven])
                    console.log(seven)
                    break;
                case 8:
                    let eight = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
                    setDigits(cur => [...cur, eight])
                    console.log(eight)
                    break;
                case 9:
                    let nine = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
                    setDigits(cur => [...cur, nine])
                    console.log(nine)
                    break;
                case 10:
                    let ten = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
                    setDigits(cur => [...cur, ten])
                    console.log(ten)
                    break;
                default:
                    console.log("no more digits");
            }
        })








        /*
        setInterval(() => {

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


                <p key={val}>{val}{callOperator()}</p>
        */

    }


    useEffect(() => {

        console.log("use")

        const f = digits.map((val, i) => {
            console.log(i)
            console.log(digits)

            if (i < digits.length) {
                return <p key={val}>{val}{callOperator()}</p>
            }else{
                return <div>too big</div>;
            }

        })

        console.log(f)
        setFinal(f)

    }, [digits])


    useEffect(() => {

        if (arrayValue.length >= 0) {
            //console.log("ici " + arrayValue)
            const stepObj = Object.keys(arrayValue)
            const stepBtn = stepObj.map((id) =>
                <Btnvalue key={id} nbr={arrayValue[id].nbr} AddDigit={() => AddDigit(id)} DeleteDigit={() => DeleteDigit(id)}></Btnvalue>
            )
            setListeValue(stepBtn)
        }
        else {
            console.log("arrayValue void")
        }

    }, [arrayValue])




    return (
        <div>
            <Navbar></Navbar>
            <h1>Calcul</h1>
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


            <button onClick={AddValue}>add value</button>
            <button onClick={DeleteValue}>delete value</button>

            {listeValue}


            <button onClick={CalculFinal}>cacul</button>
            {final}

            <br></br>




        </div>
    );
};

export default Calcul;


/*** *
 * 
 * 
 * 
 *             {digits.map(val => <p key={val}>{val}{callOperator()}</p>)}
 

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


            <button onClick={addValue}>add value</button>
            <button onClick={deleteValue}>delete value</button>

            {listeValue}

            <button onClick={calculFinal}>cacul</button>
            <p>{final}</p>

            <br></br>




            PREMIERE PARTIE


            
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


    const addValue = () => {
        const a = '<button onClick={addDigit}>add digit</button> <button onClick={popDigit}>pop digit</button>';
        setValueCalcul(cur => [...cur, a]);
    }


                <button onClick={addValue}>addValue</button>
            {valueCalcul.map(value => <div key={value} className="content" dangerouslySetInnerHTML={{ __html: value }}></div>)}
            <br></br>


                        <button onClick={addDigit}>add digit</button>
            <button onClick={popDigit}>pop digit</button>
            <p>{nbrDigitsOne}</p>
            

            <button onClick={addDigit2}>add digit</button>
            <button onClick={popDigit2}>pop digit</button>
            <p>{nbrDigitsTwo}</p>


 * 
 * **/