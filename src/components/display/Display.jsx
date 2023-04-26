import React from 'react';
import './display.css';
import Button from '../button/Button';


const Display = ({ display, result, backEnd }) => {

    return (
        <div>
            <Button onClick={backEnd}>BACK</Button>
            <div className='display'><p>{display}{result}</p></div>
        </div>
    );
};

export default Display;