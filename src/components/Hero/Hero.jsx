import React from 'react'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}> Hi! I'm Simra Khan</h1>
      <p className={styles.description}>i'm a full-stack developer with 2 years of Experience using React and NodeJs. Reach out  if you'd like to learn more.</p>
      <a className={styles.contact} href='MailTo:khansimra652@gmail.com'>Contact Me</a>
    </div>
    <img src='/heroImage.png' alt='heroimage' className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.buttomBlur}/>
    </section>
  )
}

export default Hero
