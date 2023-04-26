import React from 'react';
import { useEffect, useState } from 'react';
import Display from '../../../../components/display/Display';

const Shuffle = ({ shuffledArray, time, backEnd }) => {

    const [display, setDisplay] = useState('')
    const [result, setResult] = useState()

    useEffect(() => {

        let i = 0

        if (shuffledArray.length > 0 && i < 10) {

            let one = shuffledArray[i][0]
            let two = shuffledArray[i][1]
            let three = shuffledArray[i][2]

            let show = <p>{one} x {two} = </p>
            setDisplay(show)

            let step = 30 * (time * 1000)
            let percentage = step / 100
            setTimeout(() => {
                setResult(three)
            }, percentage)
            i++
            setResult('')


            const intervalID = setInterval(() => {

                if (shuffledArray.length > 0 && i < 10) {

                    let one = shuffledArray[i][0]
                    let two = shuffledArray[i][1]
                    let three = shuffledArray[i][2]
                    let show = <p>{one} x {two} = </p>
                    setDisplay(show)

                    let step = 30 * (time * 1000)
                    let percentage = step / 100

                    setTimeout(() => {
                        setResult(three)
                    }, percentage)
                    i++
                    setResult('')

                }
                else {
                    setDisplay("the end")
                    setResult('')
                    clearInterval(intervalID)
                }

            }, time * 1000)
        }
        else {
            console.error("error");
        }

    }, [shuffledArray])

    return (
        <div>
            <h1>Shuffle</h1>
            <Display backEnd={backEnd} display={display} result={result}></Display>

        </div>
    );
};

export default Shuffle;

/** 
 * 
 * 

            {shuffledArray.map(val => <p key={val}>{val}</p>)}


    useEffect(() => {
        let i = 0

        setDisplay(shuffledArray[i])
        i++

        if (shuffledArray.length > 0 && i < 10) {
            const intervalID = setInterval(() => {

                if (shuffledArray.length > 0 && i < 10) {

                    let a = shuffledArray[i].map(cur => 
                        <Digits key={cur + 0.5} value={cur} />
                        )
                    setDisplay(a)
                    i++
                }
                else {
                    console.log("elseInter")
                    setDisplay("the end")
                    clearInterval(intervalID)
                }

            }, time)
        }
        else {
            console.log("elseOutside")
        }

    }, [shuffledArray])


    time > 10000 ? 4000 : percentage

 * **/