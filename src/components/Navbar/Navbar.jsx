import React,{useState} from 'react'

import styles from "./Navbar.module.css";


const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false);

  return (
    <nav className={styles.Navbar}>
        <a className={styles.title} href='/'>
        Portfolio
        </a>
    <div className={styles.menu}>
        <img  className={styles.menuBtn}
         src=  {menuOpen ? "/menuIcon.png" :"/closeIcon.png"}
         alt="menu-button"
         onClick={()=> setMenuOpen(!menuOpen)}
          />
      <ul
  className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
  onClick={() => setMenuOpen(false)}
>

        <li>
            <a href='#about'>About</a>
        </li>
        <li>
        <a href='#experience'>Experience</a>
        </li>
        
        <li>
        <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
