import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import AdminContent from '../../components/AdminPage/AdminContent';
import { UserInterface } from '../../Interfaces/UserInterface';

const AdminPage = React.memo(() => {

    const getUser = useSelector((state: RootState) => state.user.user as UserInterface[])
    const currentUser = getUser[0]
    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <main className={theme.theme === 'dark' ? 'main dark-back' : 'main light-back'}>
            <AdminContent
                email={currentUser.email}
                firstName={currentUser.firstName}
                lastName={currentUser.lastName}
                username={currentUser.username}
                phone={currentUser.phone}
                image={currentUser.image}
                theme={theme.theme}
                companyId={currentUser.companyId!}
            />
        </main>
    );
})

export default AdminPage;
