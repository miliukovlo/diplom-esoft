import React from 'react';
import './AdminCreateProjectStyle.css'
import { Link } from 'react-router-dom';

interface AdminCreateProjectProps {
    theme: string,
    companyId: string
}

const AdminCreateProject: React.FC<AdminCreateProjectProps> = ({
    theme,
    companyId
}) => {
    return (
        <div className={theme === 'dark' ? 'admin-create list-black' : 'admin-create list-light'}>
            <Link to={`/admin/${companyId}`} className={theme === 'dark' ? 'admin-link__light' : 'admin-link__dark'}><h2 className={theme === 'dark' ? 'create-title light-title' : 'create-title dark-title'}>Создать проект</h2></Link>
        </div>
    );
}

export default AdminCreateProject;
