import React, { useRef, useState } from 'react'
import './contact.scss'
import {motion,useInView} from 'framer-motion'
import emailjs from '@emailjs/browser';

const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const Contact = () => {
    const ref=useRef()
    const formRef=useRef()
    const inInView=useInView(ref,{margin:"-100px"})
    const[error,setError]=useState(null)
    const[success,setSuccess]=useState(null)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dkfiodf', 'template_6356tjr', formRef.current, {
            publicKey: 'FhNBPDkBnlpD8xkMv',
          })
          .then(
            (result) => {
             setSuccess(true)
             
            },
            (error) => {
              setError(true)
            },
          );
      };
  return ( 
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate" ref={ref}>
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work <br /> together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h3>Mail</h3>
                <p>hello@gmail.com</p>
            </motion.div>   
            <motion.div className="item" variants={variants}>
                 <h3>Address</h3>
                <p>3rd street Veerpandipirivu</p>
            </motion.div> 
            <motion.div className="item" variants={variants}>
                <h3>Phone</h3>
                <p>+91 8270641480</p>
            </motion.div>  
                
            
            
        </motion.div>
        <motion.div className="formContainer" variants={variants}>            
            <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} ref={formRef}  onSubmit={sendEmail}>
                <input type="text" placeholder='Name'required name='name'/>
                <input type="text" placeholder='Email' required name='email'/>
                <textarea rows={8} placeholder='Message' name='message'></textarea>
                <button>Sumbit</button>
                {error && "Error"}
                {success && "Success"}
            </motion.form>
        </motion.div>
    </motion.div>
  )
}

export default Contact