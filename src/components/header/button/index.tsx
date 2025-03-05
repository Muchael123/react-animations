import styles from "./btn.module.scss"
import {motion} from 'motion/react'
type BtnProps = {
    isActive: boolean
    setIsActive: (value: boolean) => void
}
function Button({isActive, setIsActive}: BtnProps) {
   
  return (
    <div onClick={()=> {
        setIsActive(!isActive)
        console.log("hello")
        }} 
        className={styles.button}>
        <motion.div
        animate={{top: isActive? "-100%": "0%"}}
        transition={{duration: 0.5, ease:[0.76, 0, 0.24, 1]}}
          className={styles.slider}>
        <div className={styles.el}>
            <PerspectiveText label="menu" />
        </div>
        <div className={styles.el}>
            <PerspectiveText label="close" />
        </div>
        </motion.div>
    </div>
  )
}

export default Button

type  PerspectiveProps = {
    label: string
}

const PerspectiveText = ({label}: PerspectiveProps)=>{
    return(
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}