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
            <motion.div className="phoneSvg"initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3 ,duration:1}}>
                <svg width="450px" height="450px" viewBox='0 0 32.666 32.666'>
                    <motion.path
                        strokeWidth={0.2}
                        fill='none'
                        initial={{pathLength:0}}
                        animate={inInView && {pathLength:1}}
                        transition={{duration:2}}
                        d="M 5.13641 12.764 L 8.15456 9.08664 C 8.46255 8.69065 8.61655 8.49264 8.69726 8.27058 C 8.76867 8.07409 8.79821 7.86484 8.784 7.65625 C 8.76793 7.42053 8.67477 7.18763 8.48846 6.72184 L 7.77776 4.9451 C 7.50204 4.25579 7.36417 3.91113 7.12635 3.68522 C 6.91678 3.48615 6.65417 3.35188 6.37009 3.29854 C 6.0477 3.238 5.68758 3.32804 4.96733 3.5081 L 3 4 C 3 14 9.99969 21 20 21 L 20.4916 19.0324 C 20.6717 18.3121 20.7617 17.952 20.7012 17.6296 C 20.6478 17.3456 20.5136 17.0829 20.3145 16.8734 C 20.0886 16.6355 19.7439 16.4977 19.0546 16.222 L 17.4691 15.5877 C 16.9377 15.3752 16.672 15.2689 16.4071 15.2608 C 16.1729 15.2536 15.9404 15.3013 15.728 15.4001 C 15.4877 15.512 15.2854 15.7143 14.8807 16.119 L 11.8274 19.1733 M 12.9997 7 C 13.9765 7.19057 14.8741 7.66826 15.5778 8.37194 C 16.2815 9.07561 16.7592 9.97326 16.9497 10.95 M 12.9997 3 C 15.029 3.22544 16.9213 4.13417 18.366 5.57701 C 19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
                    />
                </svg>
            </motion.div>
            
            
            <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4 ,duration:1}} ref={formRef}  onSubmit={sendEmail}>
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