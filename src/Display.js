import React from 'react';
import { useEffect, useState } from 'react';
import Digits from './Digits';

const Display = ({ shuffledArray, time }) => {

    const [display, setDisplay] = useState('');
    const [result, setResult] = useState();

    useEffect(() => {

        let i = 0

        if (shuffledArray.length > 0 && i < 10) {

            let one = shuffledArray[i][0]
            let two = shuffledArray[i][1]
            let three = shuffledArray[i][2]

            let show = <p>{one} x {two} = </p>
            setDisplay(show)

            let step = 50 * time
            let percentage = step / 100
            //console.log(percentage)
            setTimeout(() => {
                setResult(three)
              }, percentage )
            i++
            setResult('')


            const intervalID = setInterval(() => {

                if (shuffledArray.length > 0 && i < 10) {

                    let one = shuffledArray[i][0]
                    let two = shuffledArray[i][1]
                    let three = shuffledArray[i][2]
                    let show = <p>{one} x {two} = </p>
                    setDisplay(show)
    
                    let step = 50 * time
                    let percentage = step / 100
                    console.log("t " + time)
                    console.log("p " + percentage)

                    setTimeout(() => {
                        setResult(three)

                      }, percentage )
                    i++
                    setResult('')

                }
                else {
                    //console.log("elseInter")
                    setDisplay("the end")
                    setResult('')
                    clearInterval(intervalID)
                }

            }, time)
        }
        else {
            //console.log("elseOutside")
        }

    }, [shuffledArray])

    return (
        <div>
            <h1>Display</h1>
            {display}{result}



        </div>
    );
};

export default Display;

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