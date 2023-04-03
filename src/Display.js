import React from 'react';
import { useEffect, useState } from 'react';

const Display = ({ shuffledArray, time }) => {
    //console.log(shuffledArray)

    const [display, setDisplay] = useState('');

    useEffect(() => {
        let i = 0

        setDisplay(shuffledArray[i])
        i++

        if (shuffledArray.length > 0 && i < 10) {
          const intervalID =  setInterval(() => {

                if (shuffledArray.length > 0 && i < 10) {

                    //console.log(shuffledArray.length > 0 && i < 10)
                    let a = shuffledArray[i].map(cur => <p>{cur}</p>)
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

    return (
        <div>
            <h1>Display</h1>
            {display}



        </div>
    );
};

export default Display;

/** 
 * 
 * 

            {shuffledArray.map(val => <p key={val}>{val}</p>)}





 * **/