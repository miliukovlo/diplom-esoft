import React, { ChangeEvent } from 'react';
import Input from '../../UI/Input/Input';

interface UserParameterProps {
    parameterTitle: string,
    placeholderForNew: string,
    type: string,
    onChangeForNew: (e: ChangeEvent<HTMLInputElement>) => void,
    valueNew: string,
    theme: string
}

const UserParameter: React.FC<UserParameterProps> = React.memo(({
    parameterTitle,
    placeholderForNew,
    type,
    onChangeForNew,
    valueNew,
    theme,
}) => {


    return (
        <div className={theme === 'dark' ? "parameter parameter-dark" : 'parameter parameter-light'}>
            <h4 className={theme === 'dark' ? "parameter-title light-title" : 'parameter-title dark-title'}>{parameterTitle}</h4>
            <Input
                size='m'
                placeholder={placeholderForNew}
                type={type}
                onChange={onChangeForNew}
                value={valueNew}
            />
        </div>
    );
})

export default UserParameter;
