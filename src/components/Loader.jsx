import React from "react";
import { motion, useCycle } from "framer-motion";

 
const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
            repeat: Infinity,
            repeatType: 'mirror',
            yoyo: true,
            duration: 0.5

        },
        y: {
            repeat: Infinity,
            repeatType: 'mirror',
            yoyo: true,
            duration: 0.25,
            ease: 'easeOut'
        }
      }
    },
    animationTwo: {
        y: [0, -40],
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          yoyo: true,
          duration: 0.5,
          ease: 'easeOut'

        }
      }
  }

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")

    return (
        <>
        <motion.div className="loader"
        variants={loaderVariants}
        animate={animation}
        >
        </motion.div>
        <div onClick={() => cycleAnimation()}> Change Loader</div>
        </>
    )
}
export default Loader;