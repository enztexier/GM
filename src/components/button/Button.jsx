import React, { Children } from 'react';
import './button.css'

const Button = ({ children, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className='btn-master'>
                {children}
            </button>
        </div>
    );
};

export default Button;