import React from 'react';
import './Modal.css'
import { createPortal } from 'react-dom';

export function Modal({ children, onHandleButton }) {
    return createPortal (
        <div 
            className='ModalBackground'
            onClick={onHandleButton}
        >
            {children}
        </div>,
        document.getElementById('modal')
    );
};
