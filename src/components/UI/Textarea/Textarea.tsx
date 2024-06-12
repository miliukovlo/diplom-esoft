import React, { useCallback } from 'react';
import './TextareaStyle.css'

interface TextareaProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    size: string,
    placeholder: string
}

const Textarea: React.FC<TextareaProps> = ({
    value,
    onChange,
    size,
    placeholder
}: TextareaProps) => {

    const currentChange = useCallback(onChange, [onChange, value])

    return (
        <textarea
            value={value} 
            onChange={currentChange} 
            className={size === 'm' ? 'size size-m'  : size === 'l' ? 'size size-l' : 'size size-default'}
            placeholder={placeholder}
        />
    );
}

export default Textarea;
