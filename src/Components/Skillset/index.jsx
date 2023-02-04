import React from 'react';
import './Skillset.css'
import { SkillsetList } from './SlikksetList';

export function Skillset({skillsetDB}) {    
    return (
        <section id='skillset'>
            <h3>SKILLSET</h3>
            <hr />
            <div>
                {skillsetDB.map(skill => (
                    <SkillsetList 
                        key={skill.id}
                        skill={skill}
                    />
                ))}
            </div>
        </section>
    )
}
