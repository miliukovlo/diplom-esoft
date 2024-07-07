import React from 'react';
import './AdminContentStyle.css'
import AdminInformation from './AdminInformation/AdminInformation';
import { useInput } from '../../Hooks/useInput';
import UserConfig from '../Common/UserConfig/UserConfig';
import { UserPageInputInfoInterface } from '../../Interfaces/UserPageInputInfoInterface';

interface AdminContentProps {
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    phone: string,
    image: string | undefined,
    theme: string
}

const AdminContent: React.FC<AdminContentProps> = ({
    email,
    firstName,
    lastName,
    username,
    phone,
    image,
    theme
}) => {

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
        <div className='admin-content'>
            <AdminInformation
                    email={email}
                    firstName={firstName}
                    lastName={lastName}
                    username={username}
                    phone={phone}
                    image={image}
                    theme={theme}
            />
            <UserConfig
                inputsInfo={inputsInfo}
                theme={theme}
            />
        </div>
    );
}

export default AdminContent;
