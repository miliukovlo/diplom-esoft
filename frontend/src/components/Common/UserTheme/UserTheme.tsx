import React from 'react';
import SunButton from '../../Common/SunButton/SunButton';
import MoonButton from '../../Common/MoonButton/MoonButton';

interface UserThemeProps {
    theme: string
}

const UserTheme: React.FC<UserThemeProps> = ({theme}) => {
    return (
        <div className={theme === 'dark' ? "parameter parameter-dark" : 'parameter parameter-light'}>
            <h4 className={theme === 'dark' ? "parameter-title light-title" : 'parameter-title dark-title'}>Сменить тему</h4>
            <p className={theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Светлая тема: <SunButton/></p>
            <p className={theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Темная тема: <MoonButton/></p>
        </div>
    );
}

export default UserTheme;
