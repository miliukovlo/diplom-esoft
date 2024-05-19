import React, { useCallback } from 'react';
import { StrOrNumber } from '../../../Types/StrOrNumber';
import './InputStyle.css'

interface InputProps {
    type: string,
    value: StrOrNumber,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    size: string,
    placeholder: string
}

const Input: React.FC<InputProps> = ({
    type,
    value,
    onChange,
    size,
    placeholder
}: InputProps) => {

    const currentChange = useCallback(onChange, [onChange, value])

    return (
        <input 
            type={type} 
            value={value} 
            onChange={currentChange} 
            className={size === 'm' ? 'size size-m'  : size === 'l' ? 'size size-l' : 'size size-default'}
            placeholder={placeholder}
        />
    );
}

export default Input;
