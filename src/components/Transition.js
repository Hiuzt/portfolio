import React from 'react'
import {motion} from "framer-motion"

const Transition = (OgComponent) => {
  
  return () => (
    <>
        <OgComponent />
        <motion.div
            
            className="fade-out"
            initial={{scaleY: 1}}
            animate={{scaleY: 0}}
            exit={{scaleY: 1}}
            transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
        />

        <motion.div
            
            className="fade-in"
            initial={{scaleY: 1}}
            animate={{scaleY: 0}}
            exit={{scaleY: 1}}
            transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
        />
    </>
  )
}

export default Transition;