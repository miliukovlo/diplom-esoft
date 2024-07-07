import React from 'react';

interface AdminInformationProps {
    image: string | undefined,
    theme: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    phone: string,
}

const AdminInformation: React.FC<AdminInformationProps> = React.memo(({
    image,
    theme,
    firstName,
    lastName,
    username,
    email,
    phone,
}) => {
    return (
        <div>
            <div className="user-content__blocks">
            <div className="user-content__image-block">
                <img src={image ? image : 'https://yt3.googleusercontent.com/ytc/AOPolaSMvxOI0YpEAbJqoOpZ-TpDR0tR-trP4qJwi55vlA=s900-c-k-c0x00ffffff-no-rj'} alt="Аватар пользователя" className={theme === 'dark' ? "user-image user-image-dark" : 'user-image user-image-light'} />
            </div>
            <div className="user-content__info-block">
                <p className={theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Имя: {firstName}</p>
                <p className={theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Фамилия: {lastName}</p>
                <p className={theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Никнейм: {username}</p>
                <p className={theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Почта: {email}</p>
                <p className={theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Телефон: {phone}</p>
            </div>
        </div>
        </div>
    );
})

export default AdminInformation;
