import React, { ChangeEvent } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

interface LoginBlockProps {
    userName: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    password: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    error: boolean,
    registrationOrLogin: boolean,
    enterInSystem: () => {}
}

const LoginBlock: React.FC<LoginBlockProps> = React.memo(({
    userName,
    password,
    error,
    registrationOrLogin,
    enterInSystem
}) => {
    return (
        <>
            <Input
                value={userName.value}
                placeholder='Введите никнейм пользователя'
                onChange={userName.onChange}
                type='text'
                size='m'
            />
            <Input
                value={password.value}
                placeholder='Введите пароль'
                onChange={password.onChange}
                type='password'
                size='m'
            />
            <Button
                text={registrationOrLogin ? 'Зарегистрироваться' : 'Войти'}
                size="m"
                onClick={enterInSystem}
            />
            <p className={error ? 'error error-true' : 'error'}>Не удалось войти в систему!</p>
        </>
    );
})

export default LoginBlock;
