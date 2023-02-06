import React from 'react';
import './AchievementCard.css'

export function AchievementCard({image, name, onHandleButton}) {
    return (
        <img 
            className='AchievementCard' 
            src={image} 
            alt={name}   
        />
    )
}
