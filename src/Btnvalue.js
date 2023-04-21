import React from 'react';

const Btnvalue = ({nbr}) => {
    console.log("BTN" + nbr)
    return (
        <div>
            <button>aad</button>
            <button>delete</button>
            {nbr}
            
        </div>
    );
};

export default Btnvalue;