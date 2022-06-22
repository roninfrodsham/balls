import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [animate, setAnimate] = useState(false);

  function Balls() {
    let content = [];
    let delay = 0;
    for (let i = 0; i < 30; i++) {
      content.push(
        <motion.circle cx="250" cy="20" r="20" fill="#168F52" key={`ball-${i}`}
          animate={{
            x: [0, 230, 0, -230, 0],
            y: [0, 230, 460, 230, 0],
            opacity: 1 - i / 30,
          }}
          transition={{
            duration: 3.1,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            delay: delay += 1.333123456789,
          }} 
        />
      )
    }
    return content;
  }

  return (
    <div className="App">
      <svg height="500" width="500" className="svg">
        <rect x="249" y="0" fill="#09743E" width="2" height="500"/>
        <rect x="0" y="249" fill="#09743E" width="500" height="2"/>
        {animate ? Balls() : null }
      </svg>
      <motion.button 
        onClick={() => setAnimate(!animate)}
        whileHover={{
          scale: 1.2,
          textShadow: '0 0 10px #EEABCE',
        }}
      >{animate ? "Stop" : "Start"}</motion.button>
    </div>
  )
}

export default App