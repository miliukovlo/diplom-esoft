import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import CreateApartmentContent from '../../components/CreateApartmentPage/CreateApartmentcontent';
import { useParams } from 'react-router-dom';

const CreateApartmentPage = React.memo(() => {

    const params = useParams()
    const companyId = params.companyId!
    const projectId = params.projectId!
    const theme = useSelector((state: RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <main className={theme.theme === 'dark' ? 'main dark-back' : 'main light-back'}>
            <CreateApartmentContent
                theme={theme.theme}
                companyId={companyId}
                projectId={Number(params.projectId)}
            />
        </main>
    );
})

export default CreateApartmentPage;
