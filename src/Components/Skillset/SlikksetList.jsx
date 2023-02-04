import React from 'react';

export function SkillsetList({skill}) {
    return (
        <div>
            <img src={skill.image} alt={skill.name} />
            <span className='tooltip'>
                {skill.name}                
            </span>
        </div>       
    )
}
