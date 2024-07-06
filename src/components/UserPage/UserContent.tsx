import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { UserInterface } from '../../Interfaces/UserInterface';
import './UserContentStyle.css'
import { useInput } from '../../Hooks/useInput';
import { UserPageInputInfoInterface } from '../../Interfaces/UserPageInputInfoInterface';
import UserParameter from './UserParameter/UserParameter';
import UserTheme from './UserTheme/UserTheme';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';

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
            <div className="user-content__blocks">
                <div className="user-content__image-block">
                    <img src={user.image ? user.image : 'https://yt3.googleusercontent.com/ytc/AOPolaSMvxOI0YpEAbJqoOpZ-TpDR0tR-trP4qJwi55vlA=s900-c-k-c0x00ffffff-no-rj'} alt="Аватар пользователя" className={theme.theme === 'dark' ? "user-image user-image-dark" : 'user-image user-image-light'} />
                </div>
                <div className="user-content__info-block">
                    <p className={theme.theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Имя: {user.firstName}</p>
                    <p className={theme.theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Фамилия: {user.lastName}</p>
                    <p className={theme.theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Никнейм: {user.username}</p>
                    <p className={theme.theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Почта: {user.email}</p>
                    <p className={theme.theme === 'dark' ? "info-text light-color info-text__border-bottom-light" : 'info-text dark-color info-text__border-bottom-dark'}>Телефон: {user.phone}</p>
                </div>
            </div>
            <div className="user-content__config">
                    <h2 className="user-content__config-title">Настройка</h2>
                    <div className="user-content__config-block">
                        <div className="config-block__parameter">
                            {inputsInfo.map((input) => {
                                return (
                                    <UserParameter
                                        parameterTitle={input.parameterTitle}
                                        placeholderForOld={input.placeholderForOld}
                                        placeholderForNew={input.placeholderForNew}
                                        type={input.type}
                                        valueOld={input.valueOfInputOld.value}
                                        valueNew={input.valueOfInputNew.value}
                                        onChangeForOld={input.valueOfInputOld.onChange}
                                        onChangeForNew={input.valueOfInputNew.onChange}
                                        theme={theme.theme}
                                    />
                                )
                            })}
                            <UserTheme
                                theme={theme.theme}
                            />
                        </div>
                    </div>
                </div>
        </div>
    );
})

export default UserContent;
