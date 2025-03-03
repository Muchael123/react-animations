import styles from "./awards.module.scss"
import Content from '../../components/footer'
import Intro from "../../components/intro"
import { useEffect } from "react"
import Lenis from "lenis"

function AwardFooter() {
    useEffect( () => {
        const lenis = new Lenis ()
    
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }, [])
  return (
    <div>
         <Intro/>

    <div
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    className={styles.container}>
       <div className={styles.stickarea}>
        <div className={styles.stickydiv}>
       <Content />
       </div>
       </div>
    </div>
    </div>
  )
}

export default AwardFooter