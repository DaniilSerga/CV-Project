import React from 'react';
import classes from './Cv.module.scss';
import cvPhoto from '../../assets/photos/cvPhoto.webp';
import EducationSection from './EducationSection/EducationSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ExperienceSection from './ExperienceSection/ExperienceSection';
import PositionSection from './PositionSection/PositionSection';
import CONTACTS from '../../constants/contacts';

const Cv = () => {
    return (
        <section className={classes.cvContainer}>
            <div className={classes.cvWrapper}>
                <div className={classes.keyInfoSection}>
                    <div className={classes.imageContainer}>
                        <img src={cvPhoto} alt={'cv placeholder'} />
                    </div>
                    <div className={classes.personalInfoContainer}>
                        <h2 className={classes.fullName}>Daniel Siarha</h2>
                        <p>Date of birth: 11.07.2003</p>

                        <div className={classes.contactInfo}>
                            <h3>Communication</h3>
                            {
                                CONTACTS.map((contact, index) => 
                                    <div key={index} className={classes.contactContainer}>
                                        <img src={contact.icon} alt='contact icon' />
                                        <a href={contact.link}>{contact.text}</a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className={classes.infoSection}>
                    <PositionSection/>
                    <ExperienceSection/>
                    <EducationSection/>
                    <SkillsSection/>
                </div>
            </div>
        </section>
    )
}

export default Cv;