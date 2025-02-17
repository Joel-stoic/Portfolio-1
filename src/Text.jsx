import React, { useState } from 'react'
import {delay, motion} from "framer-motion"
const Text = () => {
    const variants={
        visible:(i)=>({opacity:1,x:100,
        transition:{delay:i * 0.3}
    }),
        hidden:{opacity:0},
    }
    const items=["item1","item2","item3"]
  return (
   <div className="course">
    <motion.ul initial="hidden" animate="visible" variants={variants}>
       {items.map((item,i)=> 
       <motion.li key={item} variants={variants} custom={i}>{item}</motion.li>)
       }
       
       
    </motion.ul>
   
   </div>
  )
}

export default Text