import React, { useState } from 'react';
import './LoginContentStyle.css'
import Input from '../UI/Input/Input';
import { useInput } from '../../Hooks/useInput';
import Button from '../UI/Button/Button';
import useEnterInSystem from '../../Hooks/useEnterInSystem';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import LoginBlock from './LoginBlock';
import RegistrationBlock from './RegistrationBlock';
import useRegisterInSystem from '../../Hooks/useRegisterInSystem';

const LoginContent : React.FC = () => {
    const userName = useInput<string>('')
    const password = useInput<string>('')
    const phone = useInput<string>('')
    const email = useInput<string>('')
    const isAdmin = useInput<boolean>(false)
    const firstName = useInput<string>('')
    const lastName = useInput<string>('')
    const companyId = useInput<string>('')
    const [registrationOrLogin, setRegistrationOrLogin] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const enterInSystem = useEnterInSystem(userName.value, password.value, setError)
    const registation = useRegisterInSystem(
        userName.value,
        password.value,
        firstName.value,
        lastName.value,
        email.value,
        phone.value,
        isAdmin.value,
        companyId.value,
        setError
    )
    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <main className={theme.theme === 'dark' ? 'main main-login__content dark-back' : 'main main-login__content light-back'}>
            <h2 className='main-login__title'>{registrationOrLogin ? 'Войти' : 'Регистрация'}</h2>
            {registrationOrLogin ? 
                <RegistrationBlock
                theme={theme.theme}
                userName={userName}
                phone={phone}
                isAdmin={isAdmin}
                email={email}
                firstName={firstName}
                lastName={lastName}
                companyId={companyId}
                password={password}
                error={error}
                registerInSystem={registation}
                registrationOrLogin={registrationOrLogin}
                />
                :
                <LoginBlock
                userName={userName}
                password={password}
                error={error}
                enterInSystem={enterInSystem}
                registrationOrLogin={registrationOrLogin}
            />
            }
            <p 
            onClick={() => {setRegistrationOrLogin(!registrationOrLogin)}}
            className={theme.theme === 'dark' ? 'registration-text registration-text-dark' : 'registration-text registration-text-light'} 
            >{registrationOrLogin ? 'Войти' : 'Зарегистрироваться'}</p>
        </main>
    );
}

export default LoginContent;
