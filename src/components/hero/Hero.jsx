import React from 'react'
import styles from './Hero.module.css'
import Typewriter from '../typewriter/index'
import { crimeKeywords } from '../../mockData'

import Header from '../header/Header'

function Hero( ) {
  return (
    <div className={styles.hero}>
      <Header transparent={true} />
      <div className={styles.caption} >
        <h2> Stop <Typewriter texts={ crimeKeywords } />!
          <br/> Let Our Voices be Heard! <br/> <span>#EndSARSNow!</span> </h2>
      </div>
    </div>
  )
}

export default Hero
