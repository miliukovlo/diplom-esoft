import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
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
import axios from 'axios';
import useExitFromSystem from '../../Hooks/useExitFromSystem';


const UserContent = React.memo(() => {

    const getUser = useSelector((state : RootState) => state.user.user as UserInterface[])

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    const exit = useExitFromSystem()

    const user = getUser[0]

    const [isUpdate, setIsUpdate] = useState(false)

    const handleChange = async () => {
        try {
            const encryptedPassword = CryptoJS.AES.encrypt(JSON.stringify(inputsInfo[4].valueOfInputNew.value), "someSecretKey").toString()
            axios.put(`http://localhost:3760/api/users/${getUser[0].username}`, {
                first_name: inputsInfo[0].valueOfInputNew.value === '' ? getUser[0].firstName : inputsInfo[0].valueOfInputNew.value,
                last_name: inputsInfo[1].valueOfInputNew.value === '' ? getUser[0].lastName : inputsInfo[1].valueOfInputNew.value,
                email: inputsInfo[2].valueOfInputNew.value === '' ? getUser[0].email : inputsInfo[2].valueOfInputNew.value,
                phone: inputsInfo[3].valueOfInputNew.value === '' ? getUser[0].phone : inputsInfo[3].valueOfInputNew.value,
                user_password: inputsInfo[4].valueOfInputNew.value === '' ? getUser[0].password : encryptedPassword,
                image_url: user.image,
                theme: theme.theme
            })
        } catch (e) {
            console.log(e)
        }
    }

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

    return (
        <div className='user-content'>
            <UserInformation
                theme={theme.theme}
                firstName={user.firstName!}
                lastName={user.lastName!}
                email={user.email!}
                phone={user.phone!}
                image={user.image!}
                username={user.username!}
            />
            <UserConfig
                theme={theme.theme}
                inputsInfo={inputsInfo}
            />
            <p className={isUpdate ? "is-update__text" : "is-update__text-no"}>Обновлено!</p>
            <Button
                size='l'
                text='Сохранить'
                onClick={() => {handleChange(); setIsUpdate(true)}}
            />
            <Button
                size='l'
                text='Выйти'
                onClick={() => {exit()}}
            />
        </div>
    );
})

export default UserContent;
