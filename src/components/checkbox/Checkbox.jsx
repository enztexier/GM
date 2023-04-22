import React from 'react';
import './checkbox.css';

const Checkbox = ({ label, value, onChange }) => {
    return (
        <>

            <div className="round">
                <input type="checkbox" id={label} checked={value} onChange={onChange} required="required" />
                <label htmlFor={label}><span>{label}</span></label>
            </div>

        </>
    );
};

export default Checkbox;



/*
<label class="container">Two
  <input type="checkbox">
  <span class="checkmark"></span>
</label>

            <label className='container'>
                <input type="checkbox" checked={value} onChange={onChange} required="required" />
                <span class="checkmark">{label}</span>
                {label}
            </label>


<input type="checkbox" checked id="checkbox" checked={value} onChange={onChange} />



            <div class="round">
                <input type="checkbox" checked={value} onChange={onChange} required="required" />
                <label for="checkbox"><span>{label}</span></label>
            </div>


            
*/

