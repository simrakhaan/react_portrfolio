import React from 'react'

import styles from "./About.module.css";
const About = () => {
  return (
   <section className={styles.container} id="about">
   <h2 className={styles.title}>About</h2>
   <div className={styles.content}>
      <img
       src="/aboutImage.png"
       alt="aboutimage"
       className={styles.aboutImage}
       />
       <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src="/cursorIcon.png" alt="cursoricon" />
        <div className={styles.aboutItemsText}>
            <h1>Frontend Developer</h1>
            <p>i'm frontend developer with experience responsive and optimized slites </p>
            
            </div>
            
        </li>
        <li className={styles.aboutItem}>
            <img src="/serverIcon.png" alt="servericon" />
        <div className={styles.aboutItemsText}>
            <h1>Backend Developer</h1>
            <p>i'm backend developer with experience developing fast and optimized back-end system APIs </p>
            
            </div>
            
        </li>
        <li className={styles.aboutItem}>
            <img src="/uiIcon.png" alt="uiicon"/>
        <div className={styles.aboutItemsText}>
            <h1>UI Developer</h1>
            <p>I have developed multiple landingpages</p>
            
            </div>
            
        </li>
       </ul>
    </div>
    </section>
  )
}

export default About
