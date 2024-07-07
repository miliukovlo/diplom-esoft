import React from 'react';
import './HeaderStyle.css'
import { HeaderLinks } from './HeaderLinks';
import { HeaderLinksInterface } from '../../../Interfaces/HeaderLinksInterface';
import { Link } from 'react-router-dom';
import UserIcon from '../../UI/UserIcon/UserIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../data/reducers/store';
import { ThemeReducerInterface } from '../../../Interfaces/ThemeReducerInterface';
import { UserInterface } from '../../../Interfaces/UserInterface';

const links : HeaderLinksInterface[] = HeaderLinks


const Header : React.FC = React.memo(() => {

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)
    const getUser = useSelector((state : RootState) => state.user.user as UserInterface[])
    const currentUser = getUser[0]

    return (
        <header className={theme.theme === 'dark' ? 'header-dark' : 'header-light'}>
            <ul className='header-list'>
                {links.map(el => {
                    return(
                        <li key={el.id} className={theme.theme === 'dark' ? 'list-element-dark' : 'list-element-light'}>
                            <Link className={theme.theme === 'dark' ? 'element-link-dark' : 'element-link-light'} to={el.link}>
                                {el.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Link to={currentUser.isAdmin ? '/admin' : 'user'} className='icon-link__block'>
                <UserIcon
                    size='m'
                    color={theme.theme === 'dark' ? 'white' : 'black'}
                />
            </Link>
        </header>
    );
})

export default Header;
