import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import CompanyBlock from '../Common/CompanyBlock/CompanyBlock';
import './FavoriteContentStyle.css'
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';

const FavoriteContent: React.FC = () => {
    const favoriteCompanies = useSelector((state : RootState) => state.favorite.favoriteCompanies as CompanyInterface[])
    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    return (
        <main className={theme.theme === 'dark' ? 'main favorite-content dark-back' : 'main favorite-content light-back'}>
            <div className={favoriteCompanies.length === 0 ? "companies-block-none" : "companies-block"}>
                {
                    favoriteCompanies.length === 0 ?
                    <h1 className='favorite-page__title'>Вы не добавили ни одну компанию в избранное!</h1>
                    :
                    favoriteCompanies.map((company: CompanyInterface) => {
                            return (
                                <CompanyBlock
                                    name={company.name}
                                    id={company.id}
                                    slogan={company.slogan}
                                    logo={company.logo}
                                    specialization={company.specialization}
                                    rating={company.rating}
                                    key={company.id}
                                    theme={theme.theme}
                                />
                            )
                        })
                }
            </div>
        </main>
    );
}

export default FavoriteContent;
