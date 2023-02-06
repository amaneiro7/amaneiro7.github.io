import React from 'react';
import './Achievements.css'
import { AchievementsList } from './AchievementsList';

export function Achievements({achievementsDB, setOpenModal}) {    
    return [
        <section id='achievements'>
            <h3>ACHIEVEMENTS</h3>
            <hr />
            <div>
                {achievementsDB.map((achievement, index) => (
                    <AchievementsList 
                        key={index}
                        achievement={achievement}                        
                        setOpenModal={setOpenModal}
                    />
                ))}
            </div>
        </section>
    ]
}
