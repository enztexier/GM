import React from 'react';
import './display.css';
import Button from '../button/Button';

const Display = ({ display, result, backEnd }) => {

    return (
        <>
            <div className='btn-back'>
                <Button onClick={backEnd}>BACK</Button>
            </div>


            <div className='center-nbr'>
                <div className='display'>
                    <p>{display}</p><p>{result}</p>
                </div>
            </div>
        </>
    );
};

export default Display;