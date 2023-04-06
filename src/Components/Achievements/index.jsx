import React, { lazy } from 'react';
import { AchievementsDB } from '@App/achievementsDB';
import './Achievements.css'

const AchievementsList = lazy(() => import('./AchievementsList'));

export default function Achievements({setOpenModal}) {    
    return [
        <section id='achievements'>
            <h3>ACHIEVEMENTS</h3>
            <hr />
            <div>
                {AchievementsDB.map((achievement, index) => (
                    <AchievementsList 
                        key={`achievements${index}`}
                        achievement={achievement}                        
                        setOpenModal={setOpenModal}
                    />
                ))}
            </div>
        </section>
    ]
}
