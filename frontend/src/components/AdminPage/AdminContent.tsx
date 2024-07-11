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
import axios from 'axios';

interface AdminContentProps {
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    phone: string,
    image: string | undefined,
    theme: string,
    companyId: string,
    password: string
}

const AdminContent: React.FC<AdminContentProps> = ({
    email,
    firstName,
    lastName,
    username,
    phone,
    image,
    theme,
    companyId,
    password
}) => {

    const inputsInfo: UserPageInputInfoInterface[] = [
        {
            parameterTitle: 'Сменить имя',
            id: 1,
            placeholderForNew: 'Введите новое имя',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить фамилию',
            id: 2,
            placeholderForNew: 'Введите новую фамилию',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить почту',
            id: 4,
            placeholderForNew: 'Введите новую почту',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить телефон',
            id: 5,
            placeholderForNew: 'Введите новый телефон',
            type: 'text',
            valueOfInputNew: useInput(''),
        },
        {
            parameterTitle: 'Сменить пароль',
            id: 6,
            placeholderForNew: 'Введите новый пароль',
            type: 'password',
            valueOfInputNew: useInput(''),
        },
    ]

    const navigate = useNavigate()

    const handleChange = async () => {
        try {
            axios.put(`http://localhost:3760/api/users/${username}`, {
                first_name: inputsInfo[0].valueOfInputNew.value === '' ? firstName : inputsInfo[0].valueOfInputNew.value,
                last_name: inputsInfo[1].valueOfInputNew.value === '' ? lastName : inputsInfo[1].valueOfInputNew.value,
                email: inputsInfo[2].valueOfInputNew.value === '' ? email : inputsInfo[2].valueOfInputNew.value,
                phone: inputsInfo[3].valueOfInputNew.value === '' ? phone : inputsInfo[3].valueOfInputNew.value,
                password: inputsInfo[4].valueOfInputNew.value === '' ? password : CryptoJS.AES.encrypt(JSON.stringify(inputsInfo[4].valueOfInputNew.value), "someSecretKey").toString(),
                theme: theme
            })
        } catch (e) {
            console.log(e)
        }
    }

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
                text='Сохранить'
                onClick={() => {handleChange()}}
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
