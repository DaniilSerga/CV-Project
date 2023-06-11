import React from 'react';
import classes from './SkillsSection.module.scss';
import SKILLS from '../../../constants/skills';

const SkillsSection = () => {
    return (
        <section>
            <h3 className={classes.subtitle}>Key skills</h3>
            <table className={classes.skillsTable}>
                <tbody>
                    <tr>
                        <td>
                            <p className={classes.skillName}>Hard skills</p>
                        </td>
                        <td>
                            <div className={classes.skillsContainer}>
                                {
                                    SKILLS.hardSkills.map((skill, index) =>
                                        <p key={index} className={classes.skill}>{skill}</p>
                                    )
                                }
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={classes.skillName}>Languages</p>
                        </td>
                        <td>
                            <div className={classes.languagesContainer}>
                                {
                                    SKILLS.languages.map((language, index) =>
                                        <div key={index} className={classes.languageContainer}>
                                            <p>{language.name}</p>
                                            <p>–</p>
                                            <p>{language.level}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default SkillsSection;