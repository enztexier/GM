import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Checkbox from './Checkbox';
import { useState } from 'react';

const Home = () => {

    const [checkedOne, setCheckedOne] = useState("heyyyy");
    const [checkedTwo, setCheckedTwo] = useState(false);

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
        console.log('checkbooxOne');
        console.log(checkedOne);
    };

    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
        console.log('checkboxTwo');
        console.log(checkedTwo);
    };

    const GetRandomInt = () => {
        let one = Math.floor(Math.random() * 99);
        let two = Math.floor(Math.random() * 99);
        let result = one + two;
        let b = <p>{one} + {two} = {result}</p>;
        console.log(b);
        let a = "yoooo";
        console.log(a);
        console.log(checkedOne);
        setCheckedOne(b);
    }


    return (
        <div>
            <h1>Home</h1>
            <Link to="/copyright">Copyright</Link>
            <br></br>
            <Checkbox
                label="Value 1"
                value={checkedOne}
                onChange={handleChangeOne}
            />

            <Checkbox
                label="Value 2"
                value={checkedTwo}
                onChange={handleChangeTwo}
            />

            <p>Is "My Value" checked? {checkedOne}</p>

            <button onClick={GetRandomInt}>click</button>



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