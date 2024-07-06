import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../data/reducers/ThemeReducer';
import { RootState } from '../../../data/reducers/store';
import { ThemeReducerInterface } from '../../../Interfaces/ThemeReducerInterface';
import './SunButton.css'

const SunButton = React.memo(() => {

    const dispatch = useDispatch()

    const changeThemeOnLight = () => {
            dispatch(
            changeTheme({theme: 'light'})
        )
    }

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <button onClick={changeThemeOnLight} className='sun-button'>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='svg-change' d="M12 2V3" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
                <path className='svg-change' d="M12 21V22" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
                <path className='svg-change' d="M22 12L21 12" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
                <path className='svg-change' d="M3 12L2 12" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
                <path className='svg-change' d="M19.0708 4.92969L18.678 5.32252" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
                <path className='svg-change' d="M5.32178 18.6777L4.92894 19.0706" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
                <path className='svg-change' d="M19.0708 19.0703L18.678 18.6775" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
                <path className='svg-change' d="M5.32178 5.32227L4.92894 4.92943" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
                <path className='svg-change' d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke={theme.theme === 'light' ? '#f4c800' : 'rgb(19,16,16)'} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </button>
    );
})

export default SunButton;
