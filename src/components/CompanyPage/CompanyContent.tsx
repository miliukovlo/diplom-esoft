import React from 'react';
import CompanyInterface from '../../Interfaces/CompanyInterface';
import './CompanyContentStyle.css'

interface CurrentCompanyInterface extends CompanyInterface {
    
}

const CompanyContent: React.FC<CurrentCompanyInterface> = ({
    logo,
    name,
    slogan,
    rating,
    specialization,
    id
}: CurrentCompanyInterface) => {
    return (
        <div className='company-content'>
            <div className="company-content__logo-block">
                <img src={logo} alt="Логотип компании" className='company-content__logo' />
            </div>
            <div className="company-content__information-block">
                <div className="information-block__title">
                    <h2 className='title-name'>{name}</h2>
                    <p className='common-text'>{slogan}</p>
                </div>
                <div className="information-block__about">
                    <p className="common-text">Специализация компании: {specialization === 'apartment' ?
                'Квартиры' : 'Частные дома'
            }</p>
            <p className="common-text">Рейтинг: {rating}</p>
                </div>
            </div>
        </div>
    );
}

export default CompanyContent;
