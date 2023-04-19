import React from 'react';
import './display.css';

const Display = ({display,result}) => {
    return (
        <div>
            <div className='display'><p>{display}</p><p>{result}</p></div>
            
        </div>
    );
};

export default Display;