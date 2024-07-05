import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetForCompany } from '../../Hooks/useGetForCompany';
import ApartmentContent from '../../components/ApartmentPage/ApartmentContent';
import { ApartmentInterface } from '../../Interfaces/ApartmentInterface';

const ApartmentPage = React.memo(() => {

    const params = useParams()

    const currentApartment: ApartmentInterface = useGetForCompany('apartment-by-id', params.companyId, Number(params.projectId), Number(params.apartmentId))!

    return (
        <main className='main'>
            <ApartmentContent 
                title={currentApartment.title} 
                cost={currentApartment.cost} 
                square={currentApartment.square} 
                rooms={currentApartment.rooms} 
                companyId={currentApartment.companyId} 
                projectId={currentApartment.projectId} 
                id={currentApartment.id} 
                haveBalcony={currentApartment.haveBalcony} 
                amount={currentApartment.amount} 
                isSale={currentApartment.isSale} 
                poster={currentApartment.poster} 
                description={currentApartment.description} 
                type={currentApartment.type} 
                rating={currentApartment.rating}
            />
        </main>
    );
})

export default ApartmentPage;
