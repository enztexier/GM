import React from 'react';
import './display.css';
import { useState } from 'react';
import Modal from '../modal/Modal.jsx';
import Button from '../button/Button';


const Display = ({display,result, backEnd}) => {

    return (
        <div>
            <Button onClick={backEnd}>BACK</Button>
            <div className='display'><p>{display}</p><p>{result}</p></div>
        </div>
    );
};

export default Display;