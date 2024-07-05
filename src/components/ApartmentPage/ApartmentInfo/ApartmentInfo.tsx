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
    rating: number
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
    rating
}) => {

    const price = NumberToCurrencyFormat(cost)

    return (
        <div className="apartment-content__info-block">
            <p className="info-text">Цена: {price}</p>
            <p className="info-text">Площадь: {square}</p>
            <p className="info-text">Количество комнат: {rooms}</p>
            <p className="info-text">Наличие балкона: {haveBalcony ? 'Есть' : 'Отсутствует'}</p>
            <p className="info-text">Количество {type === 'Квартира' ? 'квартир' : 'домов'}: {amount}</p>
            <p className="info-text">Продается: {isSale ? 'Да' : 'Нет'}</p>
            <p className="info-text">Описание: {description}</p>
            <p className="info-text">Рейтинг: {rating}</p>
        </div>
    );
})

export default ApartmentInfo;
