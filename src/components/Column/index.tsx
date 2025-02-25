
import styles from './index.module.scss'
import {motion} from 'motion/react'


type ImagesProps = {
    images: string[],
    y? :  any
}

function Column({images, y=0}: ImagesProps) {
    
  return (
    <motion.div 
    className={styles.column}
    style={{y}}
    >
    {
      images.map( (src, i) => {
        return <div key={i} className={styles.imageContainer}>
          <img 
            src={`/images/${src}`}
            alt='image'
            
          />
        </div>
      })
    }
  </motion.div>
  )
}

export default Column