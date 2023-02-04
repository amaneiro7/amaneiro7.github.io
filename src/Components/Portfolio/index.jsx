import React from 'react';
import './Portfolio.css'
import { PortfolioList } from './PortfolioList';

export function Portfolio({portfolioDB}) {
    return (
        <section id='portfolio'>
            <h3>Portfolio</h3>
            <hr />
            <div>
                {portfolioDB.map(project => (
                    <PortfolioList 
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}