import React, { useRef } from 'react'
import './parallax.scss'
import {motion,useScroll, useTransform} from "framer-motion"


const Parallax = ({type}) => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    });
    const yBg =useTransform(scrollYProgress, [0,1] , ["0","100%"])
    const yText=useTransform(scrollYProgress,[0,1],["0","500%"])


  return (
    <div className='parallax'style={{background:type === "services" ? 
    "linear-gradient(180deg, #111132, #0c0c1d)":
    "linear-gradient(180deg, #111132 , #505064)",
     
  }}
    ref={ref}
    >
        <motion.h1 style={{y:yText}}>{type === "services" ? "What we do ?" : "What we did ?" }</motion.h1>
        <motion.div className="mountains" style={{y:yBg}}></motion.div>
        <motion.div style={{y:scrollYProgress}} className="planets"></motion.div>
        <motion.div className="stars" style={{x:yBg}}></motion.div>
    </div>
  )
}

export default Parallax

