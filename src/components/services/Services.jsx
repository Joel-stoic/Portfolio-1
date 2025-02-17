import React, { useRef } from 'react'
import './services.scss'
import {animate, motion, useInView} from 'framer-motion'

const variants={
    initial:{
        opacity:0,
        x:-500,
        y:100
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const Services = () => {
    const ref=useRef();

    const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div className='services'variants={variants} initial="initial"  ref={ref} animate={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow and move forward</p>
                <hr />
                  
            </motion.div>
            <motion.div className="titleContainer"variants={variants}>
                <div className="title">
                    <img src="people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For Yours</motion.b> Business
                    </h1>
                    <button>What we do?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}><h2>Branding </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui quod magnam mollitia consequuntur. Nesciunt sunt maxime quibusdam tempora officiis in, illo, similique quo quod, asperiores voluptatum quasi natus accusamus quos. Quo corporis reprehenderit assumenda error! Eaque doloremque cum reprehenderit, eos culpa quasi soluta a inventore facere dicta maxime dolorum.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}><h2>Branding </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui quod magnam mollitia consequuntur. Nesciunt sunt maxime quibusdam tempora officiis in, illo, similique quo quod, asperiores voluptatum quasi natus accusamus quos. Quo corporis reprehenderit assumenda error! Eaque doloremque cum reprehenderit, eos culpa quasi soluta a inventore facere dicta maxime dolorum.</p>
                    <button>Go</button>
                </motion.div>
                <motion.divdiv className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}><h2>Branding </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui quod magnam mollitia consequuntur. Nesciunt sunt maxime quibusdam tempora officiis in, illo, similique quo quod, asperiores voluptatum quasi natus accusamus quos. Quo corporis reprehenderit assumenda error! Eaque doloremque cum reprehenderit, eos culpa quasi soluta a inventore facere dicta maxime dolorum.</p>
                    <button>Go</button>
                </motion.divdiv>
                
            </motion.div>

    </motion.div>
  )
}

export default Services