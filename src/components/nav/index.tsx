import { menuSlide } from './anim';
import MyLink from './link';
import styles from './nav.module.scss'
import {motion} from "motion/react"

function Nav() {
    const navitems = [
        {
            title: "home",
            href: "/",
        },
        {
            title: "about",
            href: "/",
        },
        {
            title: "work",
            href: "/",
        },
        {
            title: "contact",
            href: "/",
        }
    ];

  return (
    <motion.div variants={menuSlide} animate='enter' exit='exit' initial="initial" className={styles.menu}>
        <div className={styles.body}>
           
                <div className={styles.header}>
                    <p>Navigation</p>
                    <hr />
                    <div className={styles.nav}>
                    {navitems.map((item, index) => (
                        <MyLink {...item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Nav