import React from 'react';
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { ApartmentInterface } from '../../../Interfaces/ApartmentInterface';
import ProjectApartmentBlock from '../ProjectApartmentBlock/ProjectApartmentBlock';
import './ProjectApartmentListStyle.css'

interface ProjectApartmentListProps {
    projectId: number,
    companyId: string,
    theme: string
}

const ProjectApartmentList: React.FC<ProjectApartmentListProps> = React.memo(({
    projectId,
    companyId,
    theme
}: ProjectApartmentListProps) => {

    const apartmentsOfProject = useGetForCompany<ApartmentInterface[]>('apartments', companyId, projectId)

    return (
        <div className={theme === 'dark' ? 'apartments-list apartments-list-dark' : 'apartments-list apartments-list-light'}>
            {apartmentsOfProject !== undefined && apartmentsOfProject.length !== 0 ?
                apartmentsOfProject?.map((apartment) => {
                    return (
                        <ProjectApartmentBlock
                            cost={apartment.cost}
                            rating={apartment.rating}
                            title={apartment.title}
                            description={apartment.description}
                            id={apartment.id}
                            companyId={apartment.companyId}
                            projectId={apartment.projectId}
                            poster={apartment.poster}
                            type={apartment.type}
                            key={apartment.id}   
                            theme={theme}                    
                        />
                    )
                })
            :
            <h3 className={theme === 'dark' ? 'no-apartments__text light-title' : 'no-apartments__text dark-title'}>Проектов пока что нет!</h3>
        }
        </div>
    );
})

export default ProjectApartmentList;
