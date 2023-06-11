import React from 'react';
import classes from './ExperienceSection.module.scss';
import PROJECTS from '../../../constants/cvProjects';
import Card from '../Cards/Card';

const ExperienceSection = () => {
    return (
        <section className={classes.experienceSection}>
            <h3 className={classes.subtitle}>Work experience</h3>
            <div className={classes.projectsWrapper}>
                <div className={classes.projectsContainer}>
                    {
                        PROJECTS.map(project =>
                            <Card key={project.id} project={project} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;