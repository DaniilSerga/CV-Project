import React from 'react';
import classes from './PositionSection.module.scss';

const PositionSection = () => {
    return (
        <section className={classes.positionSection}>
            <h3 className={classes.subtitle}>Preffered positions</h3>
            <p>Specializations:</p>
            <ul>
                <li>
                    <p>Frontend developer</p>
                </li>
                <li>
                    <p>Backend .NET developer</p>
                </li>
            </ul>
            <p>Work schedule: rotation based work, remote working, flexible schedule, full day, shift schedule</p>
            <p>Desired travel time to work: any</p>
        </section>
    )
}

export default PositionSection;