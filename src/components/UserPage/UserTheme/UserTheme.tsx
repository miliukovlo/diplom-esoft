import React from 'react';
import SunButton from '../../Common/SunButton/SunButton';
import MoonButton from '../../Common/MoonButton/MoonButton';

const UserTheme = () => {
    return (
        <div className="parameter">
            <h4 className="parameter-title">Сменить тему</h4>
            <p className="info-text">Светлая тема: <SunButton/></p>
            <p className="info-text">Темная тема: <MoonButton/></p>
        </div>
    );
}

export default UserTheme;
