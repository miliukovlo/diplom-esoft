import React from 'react';
import './AdminContentStyle.css'
import AdminInformation from './AdminInformation/AdminInformation';
import { useInput } from '../../Hooks/useInput';
import UserConfig from '../Common/UserConfig/UserConfig';
import { UserPageInputInfoInterface } from '../../Interfaces/UserPageInputInfoInterface';
import ProjectsList from '../CompanyPage/ProjectsBlock/ProjectsList';
import AdminCreateProject from './AdminCreateProject/AdminCreateProject';
import AdminRequests from './AdminRequests/AdminRequests';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

interface AdminContentProps {
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    phone: string,
    image: string | undefined,
    theme: string,
    companyId: string
}

const AdminContent: React.FC<AdminContentProps> = ({
    email,
    firstName,
    lastName,
    username,
    phone,
    image,
    theme,
    companyId
}) => {

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

    const navigate = useNavigate()

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
            <ProjectsList
                companyId={companyId}
                theme={theme}
                forWho='admin'
            />
            <AdminRequests
                theme={theme}
                companyId={companyId}
            />
            <AdminCreateProject
            companyId={companyId}
                theme={theme}
            />
            <UserConfig
                inputsInfo={inputsInfo}
                theme={theme}
            />
            <Button
                size='l'
                text='Выйти'
                onClick={() => {localStorage.removeItem('isLogin'); navigate('/')}}
            />
        </div>
    );
}

export default AdminContent;
