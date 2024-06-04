import React from 'react';
import './CompanyBlockStyle.css'
import CompanyInterface from '../../../Interfaces/CompanyInterface';

const CompanyBlock = ({
    id,
    name,
    logo,
    specialization,
    slogan,
    rating
}: CompanyInterface) => {
    return (
        <div className="company-block" key={id}>
            <h1 className='company-title__text'>{name}</h1>
            <img src={logo} alt="Логотип компании" className='company-logo'/>
            <p className='company-text'>Специализация: {specialization === 'apartment' ?
                'Квартиры' : 'Частные дома'
            }</p>
            <p className='company-text'>Описание: {slogan}</p>
            <p className='company-text'>Рейтинг: {rating}</p>
        </div>
    );
}

export default CompanyBlock;
