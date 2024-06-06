import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import CompanyBlock from '../Common/CompanyBlock/CompanyBlock';
import './FavoriteContentStyle.css'

const FavoriteContent: React.FC = () => {
    const favoriteCompanies = useSelector((state : RootState) => state.favorite.favoriteCompanies as CompanyInterface[])

    return (
        <main className='main favorite-content'>
            <div className="companies-block">
                {
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
                            />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default FavoriteContent;
