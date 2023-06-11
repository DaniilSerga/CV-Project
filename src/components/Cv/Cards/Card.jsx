import React from 'react';
import classes from './Card.module.scss';
import githubIcon from '../../../assets/icons/brand-github.svg';

const Card = ({ project }) => {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.projectCover}>
                <div className={classes.coverContainer}>
                    <img src={project.cover} alt='project cover'/>
                </div>
            </div>
            <div className={classes.sideInfo}>
                <p>{project.name}</p>
                <div className={classes.tasksContainer}>
                    <p className={classes.title}>Tasks:</p>
                    {
                        project.tasks.map((task, index) => 
                            <p key={index}>{task}</p>    
                        )
                    }
                </div>
                <div className={classes.achievmentsContainer}>
                    <p className={classes.title}>Achievments:</p>
                    {
                        project.achievments.map((achievment, index) => 
                            <p key={index}>{achievment}</p>    
                        )
                    }
                </div>
                <div className={classes.iconContainer}>
                    <a href={project.github}>
                        <img src={githubIcon} alt='github icon'/>
                    </a>
                    <p>- Click to visit repository</p>
                </div>
            </div>
        </div>
    )
}

export default Card;