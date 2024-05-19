import React, { useState } from 'react';
import './LoginContentStyle.css'
import Input from '../UI/Input/Input';
import { useInput } from '../../Hooks/useInput';
import Button from '../UI/Button/Button';

const LoginContent : React.FC = () => {
    const userName = useInput('')
    const password = useInput('')
    const [error, setError] = useState<boolean>(false)

    const enterInSystem = () : void => {
        if (userName.value !== '' && password.value !== '') {
            setError(false)
            console.log(`Зашел! ${userName.value} ${password.value}`)
        }
        else {
            setError(true)
        }
    }

    return (
        <main className='main main-login__content'>
            <h2>Войти</h2>
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
                type='text'
                size='m'
            />
            <Button
                text='Войти'
                size="m"
                onClick={enterInSystem}
            />
            <p className={error ? 'error error-true' : 'error'}>Не удалось войти в систему!</p>
        </main>
    );
}

export default LoginContent;
