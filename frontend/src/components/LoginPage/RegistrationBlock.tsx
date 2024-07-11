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
    companyName: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    companyImage: {     imageForProject: File | undefined;
        handleImageChange: (event: ChangeEvent<HTMLInputElement>) => Promise<unknown>;
        setImageForProject: React.Dispatch<React.SetStateAction<File | undefined>>;
        imageUrl: string;
        setImageUrl: React.Dispatch<string> },
    companySlogan: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
    companySpecialization: { value: string; onChange: (e: ChangeEvent<HTMLSelectElement>) => void; setValue: React.Dispatch<React.SetStateAction<string>>; },
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
    companyName,
    companyImage,
    companySlogan,
    companySpecialization,
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
                <>
                    <Input
                        value={companyId.value}
                        placeholder='Введите id вашей компании'
                        onChange={companyId.onChange}
                        type='text'
                        size='m'
                    />
                    <Input
                        value={companyName.value}
                        placeholder='Введите название вашей компании'
                        onChange={companyName.onChange}
                        type='text'
                        size='m'
                    />
                    <Input
                        value={companySlogan.value}
                        placeholder='Введите слоган вашей компании'
                        onChange={companySlogan.onChange}
                        type='text'
                        size='m'
                    />
                    <h2 className={theme === 'dark' ? "info-title light-title" : 'info-title dark-title'}>Выберите специализацию компании</h2>
                    <select name="" id="" value={companySpecialization.value} onChange={(e) => {companySpecialization.setValue(e.target.value)}}>
                        <option value="apartment">Квартиры</option>
                        <option value="house">Частный дом</option>
                    </select>
                    <h2 className={theme === 'dark' ? "info-title light-title" : 'info-title dark-title'}>Выберите изображение для вашей компании</h2>
                    <div className="user-content__blocks">
                        <div className="user-content__image-block">
                        <input 
                            type='file' 
                            id='image-of-user' 
                            name='image-of-user' 
                            style={{ display: 'none' }}
                            accept='image/png, image/jpeg'
                            onChange={companyImage.handleImageChange}
                        />
                        <label htmlFor="image-of-user" className="image-button">
                            <img 
                                src={'https://yt3.googleusercontent.com/ytc/AOPolaSMvxOI0YpEAbJqoOpZ-TpDR0tR-trP4qJwi55vlA=s900-c-k-c0x00ffffff-no-rj'} 
                                alt="Аватар пользователя" 
                                className={theme === 'dark' ? "user-image user-image-dark" : 'user-image user-image-light'} 
                            />
                        </label>
                        </div>
                    </div>
                </>
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
