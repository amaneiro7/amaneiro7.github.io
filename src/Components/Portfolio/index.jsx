import React, { lazy } from 'react';
import { portfolioDB } from '@App/portfolioDB';
import './Portfolio.css'

const PortfolioList = lazy(() => import('./PortfolioList'));

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h3>Portfolio</h3>
            <hr />
            <div>
                {portfolioDB.map((project, index) => (
                    <PortfolioList 
                        key={`portfolio${index}`}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}