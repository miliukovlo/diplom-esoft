import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { UserInterface } from '../../Interfaces/UserInterface';
import './UserContentStyle.css'
import { useInput } from '../../Hooks/useInput';
import { UserPageInputInfoInterface } from '../../Interfaces/UserPageInputInfoInterface';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import UserInformation from './UserInformation/UserInformation';
import UserConfig from '../Common/UserConfig/UserConfig';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';


const UserContent = React.memo(() => {

    const getUser = useSelector((state : RootState) => state.user.user as UserInterface[])

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    const navigate = useNavigate()

    const user = getUser[0]

    const inputsInfo: UserPageInputInfoInterface[] = [
        {
            parameterTitle: 'Сменить имя',
            id: 1,
            placeholderForOld: 'Введите старое имя',
            placeholderForNew: 'Введите новое имя',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить фамилию',
            id: 2,
            placeholderForOld: 'Введите старую фамилию',
            placeholderForNew: 'Введите новую фамилию',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить никнейм',
            id: 3,
            placeholderForOld: 'Введите старый никнейм',
            placeholderForNew: 'Введите новый никнейм',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить почту',
            id: 4,
            placeholderForOld: 'Введите старую почту',
            placeholderForNew: 'Введите новую почту',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить телефон',
            id: 5,
            placeholderForOld: 'Введите старый телефон',
            placeholderForNew: 'Введите новый телефон',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить пароль',
            id: 6,
            placeholderForOld: 'Введите старый пароль',
            placeholderForNew: 'Введите новый пароль',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
    ]

    return (
        <div className='user-content'>
            <UserInformation
                theme={theme.theme}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                phone={user.phone}
                image={user.image}
                username={user.username}
            />
            <UserConfig
                theme={theme.theme}
                inputsInfo={inputsInfo}
            />
            <Button
                size='l'
                text='Выйти'
                onClick={() => {localStorage.removeItem('isLogin'); navigate('/')}}
            />
        </div>
    );
})

export default UserContent;
