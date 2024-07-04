import React from 'react';
import { useGetForCompany } from '../../../Hooks/useGetForCompany';
import { ApartmentInterface } from '../../../Interfaces/ApartmentInterface';
import ProjectApartmentBlock from '../ProjectApartmentBlock/ProjectApartmentBlock';


interface ProjectApartmentListProps {
    projectId: number,
    companyId: string
}

const ProjectApartmentList: React.FC<ProjectApartmentListProps> = React.memo(({
    projectId,
    companyId
}: ProjectApartmentListProps) => {

    const apartmentsOfProject = useGetForCompany<ApartmentInterface[]>('apartments', companyId, projectId)

    return (
        <div className='apartments-list'>
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
                        />
                    )
                })
            :
            <h3>Проектов пока что нет!</h3>
        }
        </div>
    );
})

export default ProjectApartmentList;
