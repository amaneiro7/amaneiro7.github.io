import React from 'react';
import {Button} from '../Button'

export function AchievementsList({achievement}) {
    return (
        <div>
            <img src={achievement.logo} alt={`${achievement.name} logo`} />
            <small>
                {achievement.name}
            </small>
            <Button
                name={"View"}
            />            
        </div>    
    )
}
