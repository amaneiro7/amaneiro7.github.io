import React, { lazy } from 'react';
import { skillsetDB } from '@App/SkillSetDB';
import './Skillset.css'

const SkillsetList = lazy(() => import('./SlikksetList'));

export default function Skillset() {    
    return (
        <section id='skillset'>
            <h3>SKILLSET</h3>
            <hr />
            <div>
                {skillsetDB.map((skill, index) => (
                    <SkillsetList 
                        key={`skillset${index}`}
                        skill={skill}
                    />
                ))}
            </div>
        </section>
    )
}
