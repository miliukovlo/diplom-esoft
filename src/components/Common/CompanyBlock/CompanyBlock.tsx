import React from 'react';
import './CompanyBlockStyle.css'
import CompanyInterface from '../../../Interfaces/CompanyInterface';
import { useNavigate } from 'react-router-dom';

const CompanyBlock: React.FC<CompanyInterface> = ({
    id,
    name,
    logo,
    specialization,
    slogan,
    rating
}: CompanyInterface) => {

    const navigate = useNavigate()

    return (
        <div className="company-block" key={id} onClick={() => {navigate(`/company/${id}`)}}>
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
