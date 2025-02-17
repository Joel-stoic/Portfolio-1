import React from 'react'
import './navbar.scss'
import {motion} from 'framer-motion'
import SideBar from '../sidebar/SideBar';
export const Navbar = () => {
  return (
    <div className='navbar'>
        <SideBar/>
        <div className="wrapper">
            
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Lama Dev</motion.span>
            <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}className='social'>
                <a href="#"><img src="/public/facebook.png" alt="" /></a>
                <a href="#"><img src="/public/instagram.png" alt="" /></a>
                <a href="#"><img src="/public/youtube.png" alt="" /></a>
                <a href="#"><img src="/public/dribbble.png" alt="" /></a>
            </motion.div>
        </div>
    </div>
  );
}
