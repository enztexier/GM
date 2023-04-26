import React from 'react';
import { useEffect, useState } from 'react';
import Display from '../../../../components/display/Display';

const LinearInfinity = ({ linearInfinit, time, backEnd }) => {

    const [display, setDisplay] = useState('')
    const [result, setResult] = useState()
    let i = 0

    useEffect(() => {


        if (linearInfinit.length > 0) {

            let one = linearInfinit[i][0]
            let two = linearInfinit[i][1]
            let three = linearInfinit[i][2]

            let show = <p>{one} x {two} = </p>
            setDisplay(show)

            let step = 30 * (time * 1000)
            let percentage = step / 100
            setTimeout(() => {
                setResult(three)
            }, percentage)
            i++
            setResult('')


            setInterval(() => {

                if (linearInfinit.length > 0 && i < linearInfinit.length) {

                    let one = linearInfinit[i][0]
                    let two = linearInfinit[i][1]
                    let three = linearInfinit[i][2]
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
                    i = 0
                }

            }, time * 1000)
        }
        else {
            console.error("linearInfinit")
        }
    }, [linearInfinit])

    return (
        <div>
            <Display display={display} result={result} backEnd={backEnd}></Display>
        </div>
    );
};

export default LinearInfinity;