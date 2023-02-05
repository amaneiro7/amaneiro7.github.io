import React from 'react';
import './Skillset.css'
import { SkillsetList } from './SlikksetList';

export function Skillset({skillsetDB}) {    
    return (
        <section id='skillset'>
            <h3>SKILLSET</h3>
            <hr />
            <div>
                {skillsetDB.map((skill, index) => (
                    <SkillsetList 
                        key={index}
                        skill={skill}
                    />
                ))}
            </div>
        </section>
    )
}
