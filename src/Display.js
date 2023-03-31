import React from 'react';
import { useEffect, useState } from 'react';

const Display = ({ shuffledArray }) => {
    console.log(shuffledArray)

    const [display, setDisplay] = useState('');

    useEffect(() => {
        let i = 0

        if(shuffledArray.length > 0) {
            setInterval(() => {

                console.log(shuffledArray[i])
                let a = shuffledArray[0].map(cur => <p>{cur}</p> )
                setDisplay(a)
                i++
    
            }, 1000)
        }
        else{
            console.log("else")
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