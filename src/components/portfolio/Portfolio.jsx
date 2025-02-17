import React, { useRef } from 'react'
import './portfolio.scss'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'

const items=[
{
  id:1,
  title:"React Commerce",
  img:"./react.jpg",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eum sint iure quas voluptate dolores. Obcaecati vel itaque hic quos, dolore molestias aspernatur provident vero maxime eligendi porro quibusdam. Veritatis!"
},
{
  id:2,
  title:"Node js",
  img:"./node.jpg",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eum sint iure quas voluptate dolores. Obcaecati vel itaque hic quos, dolore molestias aspernatur provident vero maxime eligendi porro quibusdam. Veritatis!"
},
{
  id:3,
  title:"Javascript",
  img:"./js.jpg",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eum sint iure quas voluptate dolores. Obcaecati vel itaque hic quos, dolore molestias aspernatur provident vero maxime eligendi porro quibusdam. Veritatis!"
},
{
  id:4,
  title:"Git Hub",
  img:"./git2.jpg",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eum sint iure quas voluptate dolores. Obcaecati vel itaque hic quos, dolore molestias aspernatur provident vero maxime eligendi porro quibusdam. Veritatis!"
},
]

const Single =({item})=>{

  const ref=useRef();
  const {scrollYProgress} = useScroll({
    target:ref,
    // offset:["start start","end start"]

  })
  const y= useTransform(scrollYProgress,[0,1],[-1000,1000])
  
  return <section >
            <div className="container">
              <div className="wrapper">
                <motion.div className="imageContainer"ref={ref}>
                   <img src={item.img} alt="" />
                </motion.div>
                  <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button>See demo</button>
                  </motion.div>
              </div>
            </div>
             
        </section>
    
  
}

const Portfolio = () => {
  const ref=useRef
  const {scrollYProgress} = useScroll({
    target:ref(),
    offset:["end end","start start"]
  })

  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{scaleX}}>

        </motion.div>
      </div>
       {items.map((item)=>(
        <Single item={item} key={item.id}/>
       ))}
    </div>
    
  )
}

export default Portfolio