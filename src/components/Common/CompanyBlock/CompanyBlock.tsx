import React from 'react';
import './CompanyBlockStyle.css'
import CompanyInterface from '../../../Interfaces/CompanyInterface';
import { useNavigate } from 'react-router-dom';
import HeartBlock from '../HeartBlock/heartBlock';

export interface CompanyBlockProps extends CompanyInterface {
    theme: string
}

const CompanyBlock: React.FC<CompanyBlockProps> = React.memo(({
    id,
    name,
    logo,
    specialization,
    slogan,
    rating, 
    theme
}: CompanyBlockProps) => {

    const navigate = useNavigate()

    const navigateToCompany = () => {
        navigate(`/company/${id}`)
    }

    return (
        <div className={theme === 'dark' ? "company-block company-block-dark" : 'company-block company-block-light'} key={id} onClick={navigateToCompany}>
            <h1 className='company-title__text'>{name}</h1>
            <img src={logo} alt="Логотип компании" className='company-logo'/>
            <p className='company-text'>Специализация: {specialization === 'apartment' ?
                'Квартиры' : 'Частные дома'
            }</p>
            <p className='company-text'>Описание: {slogan}</p>
            <p className='company-text'>Рейтинг: {rating}</p>
            <HeartBlock
                name={name}
                id={id}
                slogan={slogan}
                logo={logo}
                specialization={specialization}
                rating={rating}
            />
        </div>
    );
})

export default CompanyBlock;
