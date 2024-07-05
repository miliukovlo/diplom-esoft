import React from 'react';
import './ApartmentContentStyle.css'
import { ApartmentInterface } from '../../Interfaces/ApartmentInterface';
import CommentList from '../Common/CommentList/CommentList';
import { useTextarea } from '../../Hooks/useTextarea';
import ApartmentImage from './ApartmentImage/ApartmentImage';
import ApartmentInfo from './ApartmentInfo/ApartmentInfo';

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
                    <ApartmentImage
                        poster={poster}
                    />
                    <ApartmentInfo
                        type={type}
                        rating={rating}
                        description={description}
                        cost={cost}
                        square={square}
                        rooms={rooms}
                        haveBalcony={haveBalcony}
                        isSale={isSale}
                        amount={amount}
                    />
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
