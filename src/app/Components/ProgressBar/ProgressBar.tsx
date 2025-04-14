"use client";
import React from 'react'
import Styles from "./ProgressBar.module.css";
import {motion, useScroll} from "motion/react";

const ProgressBar = () => {
    const {scrollYProgress} = useScroll();
  return (
    <motion.div className={Styles.progressBar} style={{scaleX: scrollYProgress}}></motion.div>
  )
}

export default ProgressBar