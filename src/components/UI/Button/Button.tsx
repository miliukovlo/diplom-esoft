import React from 'react';
import './ButtonStyle.css'

interface ButtonProps {
    text: string,
    onClick: () => void,
    size: string
}

const Button = ({text, onClick, size} : ButtonProps) => {
    return (
        <button
            onClick={onClick} 
            className={size === 'm' ? 'size-button size-button-m'  : size === 'l' ? 'size-button size-button-l' : 'size-button size-button-default'}
        >
            {text}
        </button>
    );
}

export default Button;
