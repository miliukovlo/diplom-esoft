import React from 'react';
import './ApartmentImageStyle.css'

interface ApartmentImageProps {
    poster: string
}

const ApartmentImage: React.FC<ApartmentImageProps> = ({
    poster
}: ApartmentImageProps) => {
    return (
        <div className="apartment-content__image-block">
            <img src={poster} alt="Планировка квартиры" className="image" />
        </div>
    );
}

export default ApartmentImage;
