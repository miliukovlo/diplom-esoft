import React from 'react';
import userIcon from '../../../assets/userIcon.svg'
import './UserIconStyle.css'

interface UserIconProps {
    size: string,
    color: string
}

const UserIcon: React.FC<UserIconProps> = ({
    size,
    color
}: UserIconProps) => {
    return (
        <div className='icon-link'>
            <svg width={size === 'm' ? '30px' : '60px'} height={size === 'm' ? '30px' : '60px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#dddddd">

            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

            <g id="SVGRepo_iconCarrier"> 
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={color === 'black' ? 'rgb(19,16,16)' : 'rgb(221,221,221)'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke={color === 'black' ? 'rgb(19,16,16)' : color === 'white' ? 'rgb(221,221,221)' : 'rgb(221,221,221)'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
            </g>

            </svg>
        </div>
    );
}

export default UserIcon;
