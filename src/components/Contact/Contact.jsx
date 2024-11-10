import React from 'react'
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer  className={styles.container}id="contact">
    <div className={styles.text}>
        <h2>Contact</h2>
    <p>Feel free to  reach out</p>
      
    </div>
    <ul className={styles.links}>
        <li className={styles.link}><img src=" /emailIcon.png" alt="email-icon"/>
        <a href='MailTo:khansimra652@gmail.com'>Email.com</a>
        
        </li>
        <li  className={styles.link}><img src=" /linkedinIcon.png" alt="Linkdin-icon"/>
        <a href='http://www.linkedin.com/in/simra-khan-2641a72b5'>Linkedin.com</a>
        
        </li>
        <li  className={styles.link}><img src=" /githubIcon.png" alt="github-icon"/>
        <a href='https://github.com/simrakhaan'>Github.com</a>
        
        </li>
    </ul>
    </footer>
  )
}

export default Contact
