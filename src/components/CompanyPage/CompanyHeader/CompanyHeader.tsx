import React from 'react';
import './CompanyHeaderStyle.css'

interface CompanyHeaderProps {
    logo: string,
    name: string,
    slogan: string,
    specialization: string,
    rating: number,
    theme: string
}

const CompanyHeader: React.FC<CompanyHeaderProps> = React.memo(({
    logo,
    name,
    slogan,
    rating,
    specialization,
    theme
}: CompanyHeaderProps) => {
    return (
        <div className='company-header'>
            <div className="company-header__logo-block">
                <img src={logo} alt="Логотип компании" className='company-header__logo' />
            </div>
            <div className={theme === 'dark' ? "company-header__information-block company-header__dark" : 'company-header__information-block company-header__light'}>
                <div className="information-block__title">
                    <h2 className={theme === 'dark' ? 'title-name light-title' : 'title-name dark-title'}>{name}</h2>
                    <p className={theme === 'dark' ? 'common-text light-title' : 'common-text dark-title'}>{slogan}</p>
                </div>
                <div className="information-block__about">
                    <p className={theme === 'dark' ? 'common-text light-title' : 'common-text dark-title'}>Специализация компании: {specialization === 'apartment' ?
                'Квартиры' : 'Частные дома'
            }</p>
            <p className={theme === 'dark' ? 'common-text light-title' : 'common-text dark-title'}>Рейтинг: {rating}</p>
                </div>
            </div>
        </div>
    );
})

export default CompanyHeader;
