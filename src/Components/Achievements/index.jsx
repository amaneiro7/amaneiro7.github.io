import React from 'react';
import './Achievements.css'
import { AchievementsList } from './AchievementsList';

export function Achievements({achievementsDB}) {    
    return [
        <section id='achievements'>
            <h3>ACHIEVEMENTS</h3>
            <hr />
            <div>
                {achievementsDB.map(achievement => (
                    <AchievementsList 
                        key={achievement.id}
                        achievement={achievement}
                    />
                ))}
            </div>
        </section>
    ]
}
