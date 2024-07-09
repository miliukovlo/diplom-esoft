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


const UserContent = React.memo(() => {

    const getUser = useSelector((state : RootState) => state.user.user as UserInterface[])

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    const user = getUser[0]

    const inputsInfo: UserPageInputInfoInterface[] = [
        {
            parameterTitle: 'Сменить имя',
            placeholderForOld: 'Введите старое имя',
            placeholderForNew: 'Введите новое имя',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить фамилию',
            placeholderForOld: 'Введите старую фамилию',
            placeholderForNew: 'Введите новую фамилию',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить никнейм',
            placeholderForOld: 'Введите старый никнейм',
            placeholderForNew: 'Введите новый никнейм',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить почту',
            placeholderForOld: 'Введите старую почту',
            placeholderForNew: 'Введите новую почту',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить телефон',
            placeholderForOld: 'Введите старый телефон',
            placeholderForNew: 'Введите новый телефон',
            type: 'text',
            valueOfInputOld: useInput(''),
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить пароль',
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
        </div>
    );
})

export default UserContent;
