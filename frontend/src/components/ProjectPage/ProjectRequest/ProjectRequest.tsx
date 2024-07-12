import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './ProjectRequestStyle.css'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

interface ProjectRequestProps {
    project_id: string | null,
    apartment_id: string | null,
    company_id: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string
}

const ProjectRequest: React.FC<ProjectRequestProps> = React.memo(({
    project_id,
    apartment_id,
    company_id,
    username,
    first_name,
    last_name,
    email,
    phone
}) => {

    const request_id = uuidv4()
    console.log(username, first_name,last_name,email,phone)
    const [isUpdate, setIsUpdate] = useState(false)
    const handleAddRequest = async () => {
        const addRequest = await axios.post('http://localhost:3760/api/request/', {
            project_id: project_id,
            apartment_id: apartment_id,
            company_id: company_id,
            username: username,
            request_id: request_id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone
        })
        console.log(addRequest.data)
        setIsUpdate(true)
    }
    return (
        <div className="project-content__request">
            <p className={isUpdate ? "is-update__text" : "is-update__text-no"}>Вы оставили ссылку!</p>
            <Button
                text='Оставить заявку'
                size='xl'
                onClick={handleAddRequest}
            />
        </div>
    );
})

export default ProjectRequest;
