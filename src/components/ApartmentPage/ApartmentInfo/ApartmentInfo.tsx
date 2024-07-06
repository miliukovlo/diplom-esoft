import React from 'react';
import './ApartmentInfoStyle.css'
import { NumberToCurrencyFormat } from '../../../Hooks/NumberToCurrencyFormat';

interface ApartmentInfoProps {
    cost: number,
    square: number,
    rooms: number,
    haveBalcony: boolean,
    type: string,
    amount: number,
    isSale: boolean,
    description: string,
    rating: number,
    theme: string
}

const ApartmentInfo: React.FC<ApartmentInfoProps> = React.memo(({
    cost,
    square,
    rooms,
    haveBalcony,
    type,
    amount,
    isSale,
    description,
    rating,
    theme
}) => {

    const price = NumberToCurrencyFormat(cost)

    return (
        <div className="apartment-content__info-block">
            <p className={theme === 'dark' ? "info-text light-title info-text__border-bottom-light" : "info-text dark-title info-text__border-bottom-dark"}>Цена: {price}</p>
            <p className={theme === 'dark' ? "info-text light-title info-text__border-bottom-light" : "info-text dark-title info-text__border-bottom-dark"}>Площадь: {square}</p>
            <p className={theme === 'dark' ? "info-text light-title info-text__border-bottom-light" : "info-text dark-title info-text__border-bottom-dark"}>Количество комнат: {rooms}</p>
            <p className={theme === 'dark' ? "info-text light-title info-text__border-bottom-light" : "info-text dark-title info-text__border-bottom-dark"}>Наличие балкона: {haveBalcony ? 'Есть' : 'Отсутствует'}</p>
            <p className={theme === 'dark' ? "info-text light-title info-text__border-bottom-light" : "info-text dark-title info-text__border-bottom-dark"}>Количество {type === 'Квартира' ? 'квартир' : 'домов'}: {amount}</p>
            <p className={theme === 'dark' ? "info-text light-title info-text__border-bottom-light" : "info-text dark-title info-text__border-bottom-dark"}>Продается: {isSale ? 'Да' : 'Нет'}</p>
            <p className={theme === 'dark' ? "info-text light-title info-text__border-bottom-light" : "info-text dark-title info-text__border-bottom-dark"}>Описание: {description}</p>
            <p className={theme === 'dark' ? "info-text light-title info-text__border-bottom-light" : "info-text dark-title info-text__border-bottom-dark"}>Рейтинг: {rating}</p>
        </div>
    );
})

export default ApartmentInfo;
