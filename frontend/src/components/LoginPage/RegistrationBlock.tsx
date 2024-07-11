import React, { ChangeEvent } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

interface RegistrationBlockProps {
    userName: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    password: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    email: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    phone: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    firstName: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    lastName: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    isAdmin: { value: boolean; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<boolean>>; },
    companyId: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    error: boolean,
    theme: string,
    registrationOrLogin: boolean,
    registerInSystem: () => {}
}

const RegistrationBlock: React.FC<RegistrationBlockProps> = React.memo(({
    userName,
    password,
    error,
    registrationOrLogin,
    phone,
    email,
    firstName,
    lastName,
    companyId,
    isAdmin,
    theme,
    registerInSystem
}) => {

    const handleIsAdminChange = (event: ChangeEvent<HTMLInputElement>) => {
        isAdmin.setValue(event.target.checked);
    };

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
            <Input
                value={email.value}
                placeholder='Введите почту'
                onChange={email.onChange}
                type='text'
                size='m'
            />
            <Input
                value={phone.value}
                placeholder='Введите телефон'
                onChange={phone.onChange}
                type='text'
                size='m'
            />
            <Input
                value={firstName.value}
                placeholder='Введите ваше имя'
                onChange={firstName.onChange}
                type='text'
                size='m'
            />
            <Input
                value={lastName.value}
                placeholder='Введите вашу фамилию'
                onChange={lastName.onChange}
                type='text'
                size='m'
            />
            <div className="is-admin__block">
            <input type='checkbox' id='checkbox-login' className='login-checkbox' checked={isAdmin.value} onChange={handleIsAdminChange}/>
            <label className={theme === 'dark' ? 'light-title' : 'dark-title'} htmlFor="checkbox-login">Вы администратор компании?</label>
            </div>
            {isAdmin.value &&             
            <Input
                value={companyId.value}
                placeholder='Введите вашу фамилию'
                onChange={companyId.onChange}
                type='text'
                size='m'
            />
            }
            <Button
                text={registrationOrLogin ? 'Зарегистрироваться' : 'Войти'}
                size="m"
                onClick={registerInSystem}
            />
            <p className={error ? 'error error-true' : 'error'}>Не удалось войти в систему!</p>
        </>
    );
})

export default RegistrationBlock;
