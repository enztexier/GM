import React from 'react';

const Btnvalue = ({nbr, AddDigit, DeleteDigit}) => {
    //console.log("BTN" + nbr)
    return (
        <div>
            <button onClick={AddDigit}>+</button>
            <button onClick={DeleteDigit}>-</button>
            {nbr}
        </div>
    );
};

export default Btnvalue;