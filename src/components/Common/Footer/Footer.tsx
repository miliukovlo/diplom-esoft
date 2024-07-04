import React from 'react';
import './FooterStyle.css'

const Footer : React.FC = React.memo(() => {
    return (
        <footer className='footer'>
            <h1 className='footer-title'>Какой-нибудь текст</h1>
        </footer>
    );
})

export default Footer;
