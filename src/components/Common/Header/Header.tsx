import React from 'react';
import './HeaderStyle.css'
import { HeaderLinks } from './HeaderLinks';
import { HeaderLinksInterface } from '../../../Interfaces/HeaderLinksInterface';
import { Link } from 'react-router-dom';
import UserIcon from '../../UI/UserIcon/UserIcon';

const links : HeaderLinksInterface[] = HeaderLinks

const Header : React.FC = React.memo(() => {
    return (
        <header className='header'>
            <ul className='header-list'>
                {links.map(el => {
                    return(
                        <li key={el.id} className='list-element'>
                            <Link className='element-link' to={el.link}>
                                {el.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Link to={'/user'} className='icon-link__block'>
                <UserIcon
                    size='m'
                    color='white'
                />
            </Link>
        </header>
    );
})

export default Header;
