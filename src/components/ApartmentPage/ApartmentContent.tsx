import React from 'react';
import './ApartmentContentStyle.css'
import { ApartmentInterface } from '../../Interfaces/ApartmentInterface';
import CommentList from '../Common/CommentList/CommentList';
import { useTextarea } from '../../Hooks/useTextarea';

const ApartmentContent: React.FC<ApartmentInterface> = React.memo(({
    title,
    cost,
    square,
    rooms,
    companyId,
    projectId,
    id,
    haveBalcony,
    amount,
    isSale,
    poster,
    description,
    type,
    rating
}: ApartmentInterface) => {

    const commentValue = useTextarea('')

    return (
            <div className="apartment-content">
                <h1 className='apartment-content__title'>{title}</h1>
                <div className="apartment-content__info">
                    <div className="apartment-content__image-block">
                        <img src={poster} alt="Планировка квартиры" className="image" />
                    </div>
                    <div className="apartment-content__info-block">
                        <p className="info-text">Цена: {cost}</p>
                        <p className="info-text">Площадь: {square}</p>
                        <p className="info-text">Количество комнат: {rooms}</p>
                        <p className="info-text">Наличие балкона: {haveBalcony ? 'Есть' : 'Отсутствует'}</p>
                        <p className="info-text">Количество {type === 'Квартира' ? 'квартир' : 'домов'}: {amount}</p>
                        <p className="info-text">Продается: {isSale ? 'Да' : 'Нет'}</p>
                        <p className="info-text">Описание: {description}</p>
                        <p className="info-text">Рейтинг: {rating}</p>
                    </div>
                </div>
                <CommentList
                    type='apartment'
                    value={commentValue.value}
                    onChange={commentValue.onChange}
                    setValue={commentValue.setValue}
                    apartmentId={id}
                    CompanyId={companyId}
                    projectId={projectId}
                />
            </div>
    );
})

export default ApartmentContent;
