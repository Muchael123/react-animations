import { slide } from "../anim";
import styles from "./link.module.scss";
import {motion} from "motion/react";

type LinkProps = {
    title: string,
    href: string,
    index: number
}

function MyLink({title, href, index}: LinkProps) {
  console.log(index)

  return (
    <motion.div custom={index} variants={slide} initial="initial" exit="exit" animate="enter" className={styles.link}>
        <a href={href} >
            {title}
        </a>
    </motion.div>
  )
}

export default MyLink;