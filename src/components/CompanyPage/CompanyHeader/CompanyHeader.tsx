import React from 'react';
import './CompanyHeaderStyle.css'

interface CompanyHeaderProps {
    logo: string,
    name: string,
    slogan: string,
    specialization: string,
    rating: number
}

const CompanyHeader: React.FC<CompanyHeaderProps> = ({
    logo,
    name,
    slogan,
    rating,
    specialization,
}: CompanyHeaderProps) => {
    return (
        <div className='company-header'>
            <div className="company-header__logo-block">
                <img src={logo} alt="Логотип компании" className='company-header__logo' />
            </div>
            <div className="company-header__information-block">
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

export default CompanyHeader;
