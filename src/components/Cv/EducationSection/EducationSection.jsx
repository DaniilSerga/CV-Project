import React from 'react';
import classes from './EducationSection.module.scss';

const EducationSection = () => {
    return (
        <section className={classes.educationSection}>
            <h3 className={classes.subtitle}>Education</h3>
            <table className={classes.educationPlacesTable}>
                <tbody>
                    <tr>
                        <td>
                            <p className={classes.date}>2020-2024</p>
                        </td>
                        <td>
                            <p className={classes.organizationName}>Polessky State University</p>
                            <p>Qualification: “Software engineer-economist"</p>
                            <p>Speciality: “Information Systems and Technologies”</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={classes.date}>2021</p>
                        </td>
                        <td>
                            <p className={classes.organizationName}>Epam Training Center</p>
                            <p>Training program: .NET development</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={classes.date}>2022-2023</p>
                        </td>
                        <td>
                            <p className={classes.organizationName}>PolessUP laboratory</p>
                            <p>Position: Backend .NET developer</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={classes.date}>2023</p>
                        </td>
                        <td>
                            <p className={classes.organizationName}>The Rolling Scopes</p>
                            <p>Preparatory course "JavaScript/Front-end. Stage 0"</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={classes.date}>2023-present</p>
                        </td>
                        <td>
                            <p className={classes.organizationName}>YOUX Systems</p>
                            <p>Position: Frontend intern</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default EducationSection;