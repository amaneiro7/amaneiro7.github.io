import React from 'react';

export default function SkillsetList({skill}) {
    return (
        <div>
            <img src={skill.image} alt={skill.name} />
            <span className='tooltip'>
                {skill.name}                
            </span>
        </div>       
    )
}
