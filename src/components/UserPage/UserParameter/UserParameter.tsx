import React, { ChangeEvent } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../data/reducers/store';
import { ThemeReducerInterface } from '../../../Interfaces/ThemeReducerInterface';

interface UserParameterProps {
    parameterTitle: string,
    placeholderForOld: string,
    placeholderForNew: string,
    type: string,
    onChangeForOld: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeForNew: (e: ChangeEvent<HTMLInputElement>) => void,
    valueOld: string,
    valueNew: string,
    theme: string
}

const UserParameter: React.FC<UserParameterProps> = React.memo(({
    parameterTitle,
    placeholderForOld,
    placeholderForNew,
    type,
    onChangeForOld,
    onChangeForNew,
    valueOld,
    valueNew, 
    theme
}) => {

    return (
        <div className={theme === 'dark' ? "parameter parameter-dark" : 'parameter parameter-light'}>
            <h4 className={theme === 'dark' ? "parameter-title light-title" : 'parameter-title dark-title'}>{parameterTitle}</h4>
            <Input
                size='m'
                placeholder={placeholderForOld}
                type={type}
                onChange={onChangeForOld}
                value={valueOld}
            />
            <Input
                size='m'
                placeholder={placeholderForNew}
                type={type}
                onChange={onChangeForNew}
                value={valueNew}
            />
            <Button
                text='Сменить'
                size='m'
                onClick={() => {console.log('Сменили!')}}
            />
        </div>
    );
})

export default UserParameter;
