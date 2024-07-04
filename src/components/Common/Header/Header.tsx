import React from 'react';
import './HeaderStyle.css'
import { HeaderLinks } from './HeaderLinks';
import { HeaderLinksInterface } from '../../../Interfaces/HeaderLinksInterface';
import { Link } from 'react-router-dom';

const links : HeaderLinksInterface[] = HeaderLinks

const Header : React.FC = React.memo(() => {
    return (
        <header className='header'>
            <ul className='header-list'>
                {links.map(el => {
                    return(
                        <li key={el.id} className='list-element'><Link className='element-link' to={el.link}>{el.title}</Link></li>
                    )
                })}
            </ul>
        </header>
    );
})

export default Header;
