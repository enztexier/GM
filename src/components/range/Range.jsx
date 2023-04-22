import React from 'react';
import './range.css';

const Range = ({time, setTime}) => {
    return (
        <div>
            <input className='slider' type="range" min="1" max="20" value={time} onChange={(e) => setTime(e.target.value)}></input>
        </div>
    );
};

export default Range;