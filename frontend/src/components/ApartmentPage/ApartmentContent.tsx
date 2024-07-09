import React from 'react';
import './ApartmentContentStyle.css'
import { ApartmentInterface } from '../../Interfaces/ApartmentInterface';
import CommentList from '../Common/CommentList/CommentList';
import { useTextarea } from '../../Hooks/useTextarea';
import ApartmentImage from './ApartmentImage/ApartmentImage';
import ApartmentInfo from './ApartmentInfo/ApartmentInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { ThemeReducerInterface } from '../../Interfaces/ThemeReducerInterface';
import ProjectRequest from '../ProjectPage/ProjectRequest/ProjectRequest';

interface ApartmentContentProps extends ApartmentInterface {
    theme: string
}

const ApartmentContent: React.FC<ApartmentContentProps> = React.memo(({
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
    theme
}: ApartmentContentProps) => {

    const commentValue = useTextarea('')

    return (
            <div className="apartment-content">
                <h1 className='apartment-content__title'>{title}</h1>
                <div className={theme === 'dark' ? "apartment-content__info apartment-info__dark" : "apartment-content__info apartment-info__light"}>
                    <ApartmentImage
                        poster={poster}
                    />
                    <ApartmentInfo
                        type={type}
                        description={description}
                        cost={cost}
                        square={square}
                        rooms={rooms}
                        haveBalcony={haveBalcony}
                        isSale={isSale}
                        amount={amount}
                        theme={theme}
                    />
                </div>
                <ProjectRequest/>
                <CommentList
                    type='apartment'
                    value={commentValue.value}
                    onChange={commentValue.onChange}
                    setValue={commentValue.setValue}
                    apartmentId={id}
                    CompanyId={companyId}
                    projectId={projectId}
                    theme={theme}
                />
            </div>
    );
})

export default ApartmentContent;
