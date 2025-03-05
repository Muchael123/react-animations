import { useState } from 'react'
import Button from './button'
import styles from './header.module.scss'
import {AnimatePresence, motion} from 'motion/react'
import Nav from './nav';

function Header() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const variants = {
      open: {
        width:480,
        height: 650,
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76,0,0.24, 1]}
      },
      closed: {
        width: 100,
        height: 40,
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, type: "tween", ease: [0.76,0,0.24, 1]}
      }
    }
  return (
    <div className={styles.header}>
        <motion.div
        variants={variants}
        animate={isActive?"open": "closed"}
        initial="closed"
         className={styles.menu}>
          <AnimatePresence>
         {isActive && <Nav/>}
         </AnimatePresence>
         </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

export default Header