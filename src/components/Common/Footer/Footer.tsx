import React from 'react';
import './FooterStyle.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../data/reducers/store';
import { ThemeReducerInterface } from '../../../Interfaces/ThemeReducerInterface';

const Footer : React.FC = React.memo(() => {

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <footer className={theme.theme === 'dark' ? 'footer dark-footer' : 'footer light-footer'}>
            <h1 className={theme.theme === 'dark' ? 'footer-title dark-footer' : 'footer-title light-footer'}>Какой-нибудь текст</h1>
        </footer>
    );
})

export default Footer;
