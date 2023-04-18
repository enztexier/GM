import React from 'react';
import { useEffect, useState } from 'react';

const MultiplicationInfinity = ({ infinity, time }) => {

    const [display, setDisplay] = useState('');
    const [result, setResult] = useState();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {

        let i = getRandomInt(infinity.length);

        console.log(getRandomInt(infinity.length))

        if (infinity.length > 0) {

            let one = infinity[i][0]
            let two = infinity[i][1]
            let three = infinity[i][2]

            let show = <p>{one} x {two} = </p>
            setDisplay(show)

            let step = 30 * (time * 1000)
            let percentage = step / 100
            setTimeout(() => {
                setResult(three)
            }, percentage)
            setResult('')

            setInterval(() => {

                let i = getRandomInt(infinity.length);
                let temp = i;

                if(i === temp){
                    i = getRandomInt(infinity.length);
                }

                let one = infinity[i][0]
                let two = infinity[i][1]
                let three = infinity[i][2]
                let show = <p>{one} x {two} = </p>
                setDisplay(show)

                let step = 30 * (time * 1000)
                let percentage = step / 100

                setTimeout(() => {
                    setResult(three)
                }, percentage)
                setResult('')


            }, time * 1000)
        }
        else {
            console.error("infinity");
        }


    }, [infinity])


    return (
        <div>
            <h1>MultiplicationInfinity</h1>
            {display}{result}

        </div>
    );
};

export default MultiplicationInfinity;