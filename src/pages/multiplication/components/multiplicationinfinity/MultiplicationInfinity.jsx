import React from 'react';
import { useEffect, useState } from 'react';
import Display from '../../../../components/display/Display';

const MultiplicationInfinity = ({ infinityShuffle, time, backEnd }) => {

    const [display, setDisplay] = useState('')
    const [result, setResult] = useState()
    let i = 0
    let temp

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    useEffect(() => {

        i = getRandomInt(infinityShuffle.length)

        if (infinityShuffle.length > 0) {

            let one = infinityShuffle[i][0]
            let two = infinityShuffle[i][1]
            let three = infinityShuffle[i][2]

            let show = <p>{one} x {two} = </p>
            setDisplay(show)

            let step = 30 * (time * 1000)
            let percentage = step / 100
            setTimeout(() => {
                setResult(three)
            }, percentage)
            setResult('')

            setInterval(() => {

                i = getRandomInt(infinityShuffle.length)
                console.log(i)
                console.log(temp)

                if(i === temp){
                    i = getRandomInt(infinityShuffle.length)
                    let one = infinityShuffle[i][0]
                    let two = infinityShuffle[i][1]
                    let three = infinityShuffle[i][2]
                    let show = <p>{one} x {two} = </p>
                    setDisplay(show)
    
                    let step = 30 * (time * 1000)
                    let percentage = step / 100
    
                    setTimeout(() => {
                        setResult(three)
                    }, percentage)
                    setResult('')
                }else{

                temp = i;
                let one = infinityShuffle[i][0]
                let two = infinityShuffle[i][1]
                let three = infinityShuffle[i][2]
                let show = <p>{one} x {two} = </p>
                setDisplay(show)

                let step = 30 * (time * 1000)
                let percentage = step / 100

                setTimeout(() => {
                    setResult(three)
                }, percentage)
                setResult('')
            }


            }, time * 1000)
        }
        else {
            console.error("infinityShuffle")
        }

    }, [infinityShuffle])


    return (
        <div>
            <h1>Shuffle infinity</h1>
            <Display display={display} result={result} backEnd={backEnd}></Display>
        </div>
    );
};

export default MultiplicationInfinity;