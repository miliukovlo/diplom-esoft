import React from 'react';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import { RootState } from '../../data/reducers/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CreateProjectPage: React.FC = React.memo(() => {

    const params = useParams()

    const companyId = params.companyId

    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)
    return (
        <main className={theme.theme === 'dark' ? 'main dark-back' : 'main light-back'}>
            
        </main>
    );
})

export default CreateProjectPage;
