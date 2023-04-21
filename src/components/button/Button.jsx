import React, { Children } from 'react';
import './button.css'

const Button = ({ children }) => {
    return (
        <div>
            <button className='btn-master'>
                {children}
            </button>
        </div>
    );
};

export default Button;