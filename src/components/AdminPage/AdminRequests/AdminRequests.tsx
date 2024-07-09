import React from 'react';
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { RequestUserInterface } from '../../../Interfaces/RequestUserInterface';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { removeUserRequest } from '../../../data/reducers/requestReducer';

interface AdminRequestsProps {
    companyId: string,
    theme: string
}

const AdminRequests: React.FC<AdminRequestsProps> = ({
    companyId,
    theme
}) => {

    const companyRequests: RequestUserInterface[] = useGetForCompany('requests-for-company', companyId, undefined)!
    const dispatch = useDispatch()
    const removeCurrentRequest = (id: number) => {
        console.log(id)
        dispatch(removeUserRequest(id))
    }

    return (
        <div className={theme === 'dark' ? 'projects-list list-black requests-list' : 'projects-list list-light requests-list'}>
            <h2 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Список заявок</h2>
            {companyRequests && companyRequests.length === 0 ? 
                <h2 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Заявки отсутствуют!</h2>
            :
                companyRequests && companyRequests.map((request) => {
                    return (
                        <div className="request-block" key={request.id}>
                            <div className={theme === 'dark' ? "request-block__dark" : 'request-block__light'}>
                                <h4 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Номер заявки: {request.id}</h4>
                                <h4 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Имя пользователя: {request.firstName}</h4>
                                <h4 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Фамилия пользователя: {request.lastName}</h4>
                                <h4 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Почта: {request.email}</h4>
                                <h4 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Номер телефона: {request.phone}</h4>
                                <h4 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Проект: {request.projectId ? request.projectId : 'Не указано'}</h4>
                                <h4 className={theme === 'dark' ? "user-content__config-title light-title" : "user-content__config-title dark-title"}>Планировка: {request.apartmentId ? request.apartmentId : 'Не указано'}</h4>
                            </div>
                            <Button
                                text='Удалить заявку'
                                size="m"
                                onClick={() => {removeCurrentRequest(request.id!)}}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default AdminRequests;
