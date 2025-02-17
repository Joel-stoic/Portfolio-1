import { animate, color} from 'framer-motion'
import './hero.scss'
import React from 'react'
import {motion} from 'framer-motion'

const textVariatents={
    initial:{
       x:-500,
       opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.5,
           
        }
    },
    scrollButton:{
        y:10,
        opacity:0,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}
const slideVariatents={
    initial:{
       x:0,
      
    },
    animate:{
        x:"-250%",
        transition:{
            duration:30,
           repeat:Infinity,
        }
    },

}

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariatents} initial="initial" animate="animate">
                <motion.h2 variants={textVariatents}>Joel<br></br> Immanual</motion.h2>
                <motion.h1 variants={textVariatents} >Front-End Developer & Web developer.</motion.h1>
                <motion.div variants={textVariatents} className="buttons">
                    <motion.button variants={textVariatents}>See the latest works</motion.button>
                    <motion.button variants={textVariatents}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariatents} src="./scroll.png" alt="" animate="scrollButton"/>
            </motion.div>
           
            <div className="imageContainer">
                <img src="./hero.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero