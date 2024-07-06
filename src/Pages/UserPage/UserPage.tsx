import React from 'react';
import UserContent from '../../components/UserPage/UserContent';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';

const UserPage = () => {

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <main className={theme.theme === 'dark' ? 'main dark-back' : 'main light-back'}>
            <UserContent/>
        </main>
    );
}

export default UserPage;
