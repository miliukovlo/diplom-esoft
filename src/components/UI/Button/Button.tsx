import React from 'react';
import './ButtonStyle.css'

interface ButtonProps {
    text: string,
    onClick: () => void,
    size: 'm' | 'l' | 'xl'
}

const Button : React.FC<ButtonProps>= React.memo(({text, onClick, size} : ButtonProps) => {
    return (
        <button
            onClick={onClick} 
            className={size === 'm' ? 'size-button size-button-m'  : size === 'l' ? 'size-button size-button-l' : size === 'xl' ? 'size-button size-button-xl' : 'size-button size-button-default'}
        >
            {text}
        </button>
    );
})

export default Button;
