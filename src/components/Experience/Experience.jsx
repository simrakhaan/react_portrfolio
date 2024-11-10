import React from 'react'
 import styles from './Experience.module.css'
import skills from '../../data/skills.json';
import history from '../../data/history.json'

  const Experience = () => {
  return (
    <section  className={styles.container}id="experience">
        <h2  className={styles.title}>Experience</h2>
    <div className={styles.content}>
        <div className={styles.skills}>
        {skills.map((skill,id) => (
             <div key={id} className={styles.skill}>
            <div><img src={skill.imageSrc} alt={skill.title} className={styles.skillImageContainer}/>
            </div>
            <p>{skill.title}</p>
            
</div>
 ))}
    </div>
    <ul className={styles.history}>
        {
            history.map((historyitem,id)=>{
                return <li key={id} className={styles.historyItem}>
                    <img src={historyitem.imageSrc} alt={`${historyitem.organisation}logo`}/>
                    <div className={styles.historyItemDetails}>
                        <h3> {`${historyitem.role}, ${historyitem.organization}`}</h3>
                        <p> {`${historyitem.startDate} - ${historyitem.organization}`}</p>
                        <ul>{historyitem.experiences.map((experience,id)=>{
                            return <li key={id}>{experience}</li>
                        })}</ul>
                    </div>
                </li>
            })
        }
    </ul>
      
    </div>
    </section>
  )
}

 export  default Experience
