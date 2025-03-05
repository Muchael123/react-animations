import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './index.module.scss'


export default function Intro() {
  const scrollref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollref,
    offset: ['start end', 'end start']
  })
  
  return (
    <div className={styles.intro}>
      <div className={styles.body}>
        <div className={styles.scrool} ref={scrollref}>
          <Slider left={"-5%"} src='/images/12.webp' progress={scrollYProgress} direction={"left"} />
          <Slider left={"-10%"} src='/images/1.webp' progress={scrollYProgress} direction={"right"} />
          <Slider left={"-25%"} src='/images/2.webp' progress={scrollYProgress} direction={"left"} />
        </div>
      </div>
    </div>
  )
}

type srcProps = {
  src: string
  left: string
  progress: any
  direction: "left"| "right"
}

const Slider = ({ src, left, progress, direction }: srcProps) => {
  const dir = direction == "left"? -1: 1
  const x = useTransform(progress, [0, 1], [-250* dir, 250 * dir]);
  
  return (
    <motion.div
      style={{ left, x }}
      className={styles.slider}>
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  )
}

type phraseProps = {
  src: string
}

const Phrase = ({src}: phraseProps)=>{
  return (
    <div className={styles.phrase}>
      <p>Frontend developer</p>
      
      <span>
        <img src={src} alt='image'/>
      </span>
    </div>
  )
}