import React from 'react';
import {Button} from '../Button'

export function AchievementsList({achievement}) {
    return (
        <div>
            <img src={achievement.logo} alt={`${achievement.name} logo`} />            
                <small>
                    {achievement.name}
                </small>
                <br />
                <small>
                    Otorged by: {achievement.otorged_by}
                </small>            
            <Button
                name={"View"}
            />            
        </div>    
    )
}
