import React, { lazy } from 'react';

const ALinkButton = lazy(() => import('@Components/ALinkButton'));

export default function PortfolioList({project}) {
    return (
        <div>
            <img src={project.image} alt={project.name} />
            <small>{project.name}</small>
            <br />
            <span>{project.description}</span>
            <ALinkButton
                name={"Watch Here"}
                link={project.deploy_link}
            />
            <ALinkButton
                name={"Repository"}
                link={project.repository_link}
            />
        </div>       
    )
}
