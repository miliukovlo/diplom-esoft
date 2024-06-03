import React, { useState } from 'react';
import './LoginContentStyle.css'
import Input from '../UI/Input/Input';
import { useInput } from '../../Hooks/useInput';
import Button from '../UI/Button/Button';
import useEnterInSystem from '../../Hooks/useEnterInSystem';

const LoginContent : React.FC = () => {
    const userName = useInput<string>('')
    const password = useInput<string>('')
    const [registrationOrLogin, setRegistrationOrLogin] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const enterInSystem = useEnterInSystem(userName.value, password.value, setError)

    return (
        <main className='main main-login__content'>
            <h2>{registrationOrLogin ? 'Войти' : 'Регистрация'}</h2>
            <Input
                value={userName.value}
                placeholder='Введите имя пользователя'
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
                text={registrationOrLogin ? 'Войти' : 'Зарегистрироваться'}
                size="m"
                onClick={enterInSystem}
            />
            <p className={error ? 'error error-true' : 'error'}>Не удалось войти в систему!</p>
            <p 
            onClick={() => {setRegistrationOrLogin(!registrationOrLogin)}}
            className='registration-text' 
            >{registrationOrLogin ? 'Зарегистрироваться' : 'Войти'}</p>
        </main>
    );
}

export default LoginContent;
