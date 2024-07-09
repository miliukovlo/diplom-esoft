import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = React.memo(() => {

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (localStorage.getItem('isLogin')) {
                navigate('/main')
            } else {
                navigate('/')
            }
        }, 3000)
    }, [navigate])

    return (
        <main className={theme.theme === 'dark' ? 'main main-content dark-back' : 'main main-content light-back'}>
            <h1 className={theme.theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Страница не найдена</h1>
        </main>
    );
})

export default NotFoundPage;
