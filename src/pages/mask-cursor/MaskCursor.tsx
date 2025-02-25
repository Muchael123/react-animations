import styles from './mask.module.scss'
import useMousePosition from '../../hooks/useMousePosition';
import {motion} from 'motion/react'
import { useState } from 'react';

function MaskCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const {x,y} = useMousePosition();
    const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
    <motion.div 
      className={styles.mask}
      animate={{
        WebkitMaskPosition: `${x - size/2 }px ${y - size/2}px`,
        WebkitMaskSize: `${size}px`
      }}
      transition={{type: "tween", ease: "backOut"}}
    >
       <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
  A frontend developer - with skills that haven't been replaced by A.I (yet) - building high-quality and impactful digital experiences.
</p>

    </motion.div>

    <div className={styles.body}>
    <p>Michael Maina is a <span>selectively skilled</span> frontend developer with a strong focus on producing high-quality and impactful digital experiences.</p>

    </div>

  </main>
  )
}

export default MaskCursor