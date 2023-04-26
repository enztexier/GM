import React from 'react';
import './modal.css';
import { useState, useEffect} from 'react';

const Modal = ({ isModalVisible, children }) => {

    const m = isModalVisible === true ? 'open' : 'close';
    const [showModal, setModalStyle] = useState(m);

    useEffect(() => {
        setModalStyle(m);
    })

    return (

        <div className={showModal}>
            {children}
        </div>
    );
};

export default Modal;