import React from 'react';

const Btnvalue = ({nbr, addDigit, deleteDigit}) => {
    console.log("BTN" + nbr)
    return (
        <div>
            
            <button onClick={addDigit}>+</button>
            <button onClick={deleteDigit}>-</button>
            {nbr}
            
        </div>
    );
};

export default Btnvalue;