import Card from '../../components/card/Card';
import {projects} from '../../data'
import styles from './app.module.scss'
import { useScroll} from 'motion/react'
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Header from '../../components/header';


function Home() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(()=>{
    const lenis = new Lenis();
    function raf (time: number): void {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
    <div>
      <Header />
      <div className={styles.main}>
      {projects.map((project,index) => 
      <Card key={index} {...project}
       i={index} range={[index*.2, 1]} 
       progress={scrollYProgress} 
       targetScale = {1- ((projects.length-index)*.05)}
        />
      )}
    </div>
    </div>
  );
}

export default Home;