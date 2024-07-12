import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import UploadBlock from '../CreateProjectPage/CreateInputsBlock/UploadBlock';
import Button from '../UI/Button/Button';
import { CreateApartmentInterface } from '../../Interfaces/CreateApartmentInterface';
import { useInput } from '../../Hooks/useInput';
import { useImageHandler } from '../../Hooks/useImage';
import { useSelect } from '../../Hooks/useSelect';
import './CreateApartmentContentStyle.css'
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

interface CreateApartmentContentProps {
    theme: string,
    companyId: string,
    projectId: number | string
}

const CreateApartmentContent: React.FC<CreateApartmentContentProps> = React.memo(({
    theme,
    companyId,
    projectId
}) => {
    const [apartmentArray, setApartmentArray] = useState<CreateApartmentInterface[]>([]);
    const params = useParams()
    const getProjectId = params.projectId
    const title = useInput('')
    const description = useInput('')
    const square = useInput(0)
    const rooms = useInput(0)
    const amount = useInput(0)
    const cost = useInput(0)
    const haveBalcony = useInput(false)
    const isSale = useInput(false)
    const id = uuidv4()
    const imageOfApartment = useImageHandler()
    const type = useSelect('apartment')
    const navigate = useNavigate()
    
    const useHandleCreateApartment = async () => {
        try {
            apartmentArray.forEach(apartment => {
                console.log(apartment)
                axios.post('http://localhost:3760/api/apartment/', {
                    project_id: apartment.projectId,
                    apartment_name: apartment.title,
                    square: apartment.square,
                    rooms: apartment.rooms,
                    amount: apartment.amount,
                    apartment_cost: apartment.cost,
                    have_balcony: apartment.haveBalcony,
                    is_sale: apartment.isSale,
                    apartment_id: apartment.id,
                    company_id: apartment.companyId,
                    logo: apartment.posterUrl,
                    description: apartment.description,
                    apartment_type: apartment.type,
                })
            })
            navigate('/main')
        } catch (e) {
            console.log(e)
        }
    }

    const useAddApartment = async () => {
        console.log(getProjectId)
        const newApartment: CreateApartmentInterface = {
            title: title.value,
            description: description.value,
            square: square.value,
            rooms: rooms.value,
            amount: amount.value,
            cost: cost.value,
            haveBalcony: haveBalcony.value,
            isSale: isSale.value,
            companyId: companyId,
            projectId: getProjectId!,
            poster: imageOfApartment.imageForProject,
            posterUrl: imageOfApartment.imageUrl,
            id: id,
            type: type.value,
            watch: 0
        };
    
        setApartmentArray([...apartmentArray, newApartment]);
        title.setValue('')
        description.setValue('')
        type.setValue('apartment')
        imageOfApartment.setImageForProject(undefined)
        imageOfApartment.setImageUrl('')
    };
    

    const removeApartment = (id: number | string) => {
        setApartmentArray(apartmentArray.filter((apartment) => apartment.id !== id));
    };

    const handleHaveBalconyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        haveBalcony.setValue(event.target.checked)
    }

    const handleIsSaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        isSale.setValue(event.target.checked)
    }

    return (
        <div className='create-project__content'>
            <h2 className={theme === 'dark' ? "info-title light-title" : 'info-title dark-title'}>Настройка планировки</h2>
                    <UploadBlock
                        handleImageChange={imageOfApartment.handleImageChange}
                        theme={theme}
                        type={'project'}
                        projectId={projectId}
                    />
                    {imageOfApartment.imageUrl && <img className='project-image' src={imageOfApartment.imageUrl} alt="Изображение планировки" />}
                    <Input
                        size='l'
                        placeholder='Введите название планировки'
                        onChange={title.onChange}
                        value={title.value}
                        type='text'
                    />
                    <Input
                        size='l'
                        placeholder='Введите описание планировки'
                        onChange={description.onChange}
                        value={description.value}
                        type='text'
                    />
                    <Input
                        size='l'
                        placeholder='Введите площадь планировки'
                        onChange={square.onChange}
                        value={square.value}
                        type='text'
                    />
                    <Input
                        size='l'
                        placeholder='Введите количество комнат планировки'
                        onChange={rooms.onChange}
                        value={rooms.value}
                        type='text'
                    />
                    <Input
                        size='l'
                        placeholder='Введите цену планировки'
                        onChange={cost.onChange}
                        value={cost.value}
                        type='text'
                    />
                    <Input
                        size='l'
                        placeholder='Введите количество планировок'
                        onChange={amount.onChange}
                        value={amount.value}
                        type='text'
                    />
                    <div className="is-admin__block">
                        <input type='checkbox' id='checkbox-login' className='login-checkbox' checked={haveBalcony.value} onChange={handleHaveBalconyChange}/>
                        <label className={theme === 'dark' ? 'light-title' : 'dark-title'} htmlFor="checkbox-login">Есть балкон?</label>
                    </div>
                    <div className="is-admin__block">
                        <input type='checkbox' id='checkbox-login' className='login-checkbox' checked={isSale.value} onChange={handleIsSaleChange}/>
                        <label className={theme === 'dark' ? 'light-title' : 'dark-title'} htmlFor="checkbox-login">Продается?</label>
                    </div>
                    <select name="" id="" value={type.value} onChange={type.onChange}>
                        <option value="apartment">Квартиры</option>
                        <option value="house">Частный дом</option>
                    </select>
            <Button
                text='Добавить планировку'
                size='l'
                onClick={useAddApartment}
            />
            {apartmentArray.map((apartment) => {
                return (
                    <div className="apartment-add__block">
                        <p className={theme === 'dark' ? "apartment-info__text-light" : 'apartment-info__text-dark'}>id: {apartment.companyId}</p>
                        <p className={theme === 'dark' ? "apartment-info__text-light" : 'apartment-info__text-dark'}>Название: {apartment.title}</p>
                        <p className={theme === 'dark' ? "apartment-info__text-light" : 'apartment-info__text-dark'}>Описание: {apartment.description}</p>
                        <p className={theme === 'dark' ? "apartment-info__text-light" : 'apartment-info__text-dark'}>Тип: {apartment.type}</p>
                        <p className={theme === 'dark' ? "apartment-info__text-light" : 'apartment-info__text-dark'}>Просмотров: {apartment.watch}</p>
                        <img className='project-image' src={apartment.posterUrl} alt="Изображение планировки" />
                        <Button
                            text='Удалить планировку'
                            size='l'
                            onClick={() => {removeApartment(apartment.id)}}
                        />
                    </div>
                )
            })}
            <Button
                text='Создать проект'
                size='l'
                onClick={useHandleCreateApartment}
            />
        </div>
    );
});

export default CreateApartmentContent;
