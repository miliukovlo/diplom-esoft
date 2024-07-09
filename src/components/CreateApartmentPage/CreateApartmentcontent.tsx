import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import UploadBlock from '../CreateProjectPage/CreateInputsBlock/UploadBlock';
import Button from '../UI/Button/Button';
import { CreateApartmentInterface } from '../../Interfaces/CreateApartmentInterface';
import { useInput } from '../../Hooks/useInput';
import { useImageHandler } from '../../Hooks/useImage';
import { useSelect } from '../../Hooks/useSelect';
import { GetId } from '../../Hooks/GetId';
import './CreateApartmentContentStyle.css'
import { useNavigate } from 'react-router-dom';

interface CreateApartmentContentProps {
    theme: string,
    companyId: string,
    projectId: number
}

const CreateApartmentContent: React.FC<CreateApartmentContentProps> = React.memo(({
    theme,
    companyId,
    projectId
}) => {
    const [apartmentArray, setApartmentArray] = useState<CreateApartmentInterface[]>([]);
    const title = useInput('')
    const description = useInput('')
    const id = GetId('apartment')
    const imageOfApartment = useImageHandler()
    const type = useSelect('apartment')
    const navigate = useNavigate()

    const useAddApartment = () => {
        const newApartment: CreateApartmentInterface = {
            title: title.value,
            description: description.value,
            companyId: companyId,
            projectId: projectId,
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
    

    const removeApartment = (id: number) => {
        setApartmentArray(apartmentArray.filter((apartment) => apartment.id !== id));
    };

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
                        placeholder='Введите название проекта'
                        onChange={title.onChange}
                        value={title.value}
                        type='text'
                    />
                    <Input
                        size='l'
                        placeholder='Введите описание проекта'
                        onChange={description.onChange}
                        value={description.value}
                        type='text'
                    />
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
                onClick={() => {console.log('Проект создан!'); navigate('/main')}}
            />
        </div>
    );
});

export default CreateApartmentContent;
