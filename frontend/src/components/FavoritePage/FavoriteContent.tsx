import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import CompanyBlock from '../Common/CompanyBlock/CompanyBlock';
import './FavoriteContentStyle.css'
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import { UserInterface } from '../../Interfaces/UserInterface';

const FavoriteContent: React.FC = () => {
    const favoriteCompanies = useSelector((state : RootState) => state.favorite.favoriteCompanies as CompanyInterface[])
    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)
    const getUser = useSelector((state : RootState) => state.user.user as UserInterface[])

    return (
        <main className={theme.theme === 'dark' ? 'main favorite-content dark-back' : 'main favorite-content light-back'}>
            <div className={favoriteCompanies.length === 0 ? "companies-block-none" : "companies-block"}>
                {
                    favoriteCompanies.length === 0 ?
                    <h1 className={theme.theme === 'dark' ? 'favorite-page__title light-title' : 'favorite-page__title dark-title'}>Вы не добавили ни одну компанию в избранное!</h1>
                    :
                    favoriteCompanies.map((company: CompanyInterface) => {
                            return (
                                <CompanyBlock
                                    name={company.name}
                                    id={company.id}
                                    slogan={company.slogan}
                                    logo={"https://www.terminaldesign.ru/upload/medialibrary/d57/d577d47ef993c04b22599ba9de8b75dc.jpg"}
                                    specialization={company.specialization}
                                    key={company.id}
                                    theme={theme.theme}
                                    username={getUser[0].username!}
                                />
                            )
                        })
                }
            </div>
        </main>
    );
}

export default FavoriteContent;
