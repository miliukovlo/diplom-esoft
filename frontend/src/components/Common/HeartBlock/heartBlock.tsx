import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../data/reducers/store';
import CompanyInterface from '../../../Interfaces/CompanyInterface';
import { addFavoriteCompany, removeFavoriteCompany } from '../../../data/reducers/favoriteCompany';
import './heartBlockStyle.css'
import { ThemeReducerInterface } from '../../../Interfaces/ThemeReducerInterface';
import axios from 'axios';

interface HeartBlockInterface extends CompanyInterface {
    username: string
}


const HeartBlock: React.FC<HeartBlockInterface> = React.memo(({
    id,
    name,
    logo,
    specialization,
    slogan,
    username
} : HeartBlockInterface) => {
    const favoriteCompanies: CompanyInterface[] = useSelector((state: RootState) => state.favorite.favoriteCompanies as CompanyInterface[])
    const isCompanyFavorite: boolean = favoriteCompanies.some((company: CompanyInterface) => company.id === id)
    const dispatch = useDispatch()
    const theme = useSelector((state : RootState) => state.theme.theme as ThemeReducerInterface)

    const handleAddToFavorite = useCallback(async (e: React.MouseEvent) => {
        e.stopPropagation()
        console.log(isCompanyFavorite)
        if (!isCompanyFavorite) {
            const newCompany = {
                name: name,
                logo: logo,
                specialization: specialization,
                slogan: slogan,
                id: id
            }
            let updatedFavoriteCompanyIds = [...favoriteCompanies.map(company => company.id), id];
            try {
                await axios.put(`http://localhost:3760/api/users/${username}`, {
                    favorite_company: updatedFavoriteCompanyIds 
                })
            } catch (e) {
                console.log(e)
            }
            dispatch(addFavoriteCompany(newCompany))
        } else {
            const updatedFavoriteCompanyIds = favoriteCompanies.filter(company => company.id !== id).map(company => company.id);
            try {
                await axios.put(`http://localhost:3760/api/users/${username}`, {
                    favorite_company: updatedFavoriteCompanyIds 
                })
            } catch (e) {
                console.log(e)
            }
            dispatch(removeFavoriteCompany(id))
        }
    }, [dispatch, id, isCompanyFavorite, favoriteCompanies, username, name, specialization, slogan, logo])

    return (
        <div className="heart-block">
            <button className='favorite-button' onClick={handleAddToFavorite}>
                <svg className={isCompanyFavorite ? 'favorite-image favorite-image__true' : 'favorite-image'} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.104"/>
                    <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={theme.theme === 'dark' ? "rgb(221,221,221)" : 'rgb(19,16,16)'} strokeWidth="0.9359999999999999" strokeLinecap="round" strokeLinejoin="round"/> </g>
                </svg>
            </button>
        </div>
    );
})

export default HeartBlock;
