import React from 'react';
import './ApartmentContentStyle.css'
import { ApartmentInterface } from '../../Interfaces/ApartmentInterface';
import CommentList from '../Common/CommentList/CommentList';
import { useTextarea } from '../../Hooks/useTextarea';
import ApartmentImage from './ApartmentImage/ApartmentImage';
import ApartmentInfo from './ApartmentInfo/ApartmentInfo';
import ProjectRequest from '../ProjectPage/ProjectRequest/ProjectRequest';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/reducers/store';
import { UserInterface } from '../../Interfaces/UserInterface';

interface ApartmentContentProps extends ApartmentInterface {
    theme: string,
    projectId: string,
    companyId: string
}

const ApartmentContent: React.FC<ApartmentContentProps> = React.memo(({
    title,
    cost,
    square,
    rooms,
    id,
    haveBalcony,
    amount,
    isSale,
    poster,
    description,
    type,
    theme,
    projectId,
    companyId
}: ApartmentContentProps) => {

    const commentValue = useTextarea('')
    const getUser = useSelector((state: RootState) => state.user.user as UserInterface[])
    const currentUser = getUser[0]

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
                <ProjectRequest
                    apartment_id={id}
                    project_id={null}
                    company_id={companyId}
                    username={currentUser.username!}
                    first_name={currentUser.firstName!}
                    last_name={currentUser.lastName!}
                    email={currentUser.email!}
                    phone={currentUser.phone!}
                />
                <CommentList
                    type='apartment'
                    forWho='apartment'
                    value={commentValue.value}
                    onChange={commentValue.onChange}
                    setValue={commentValue.setValue}
                    apartmentId={id}
                    theme={theme}
                />
            </div>
    );
})

export default ApartmentContent;
