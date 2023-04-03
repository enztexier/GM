import React from 'react';

const Digits = ({value}) => {

    console.log(value)

    return (
        <div>
            <p>digits</p>
            {value}
            
        </div>
    );
};

export default Digits;