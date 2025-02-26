import { useState } from 'react'
import styles from './curved.module.scss'
import Nav from '../../components/nav';
import { AnimatePresence } from 'motion/react';

function CurvedMenu() {
    const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div>
        <button onClick={()=> setIsActive((prev: boolean) => !prev)}
         className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </button>
        <AnimatePresence mode='wait'>
        {isActive && <Nav /> }
        </AnimatePresence>
    </div>
  )
}

export default CurvedMenu