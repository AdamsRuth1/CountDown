import { useEffect, useRef, useState } from "react";
import reactLogo from './assets/react.svg'
import falzePix from './assets/falze.jpeg'
import viteLogo from '/vite.svg'
import { Button, Container, Modal } from 'react-bootstrap';
import { color, motion, AnimatePresence } from 'framer-motion';
import { LuCalendarClock } from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinuites, setTimerMinuites] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("June 7, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuites = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinuites(minuites);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // component lifecycle
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });


  return (
    <>
      <motion.div
  initial={{ opacity: 0, y: 100 }} // Start from below the viewport
  animate={{ opacity: 1, y: 0 }} // Animate to top of the viewport
  transition={{ duration: 1 }}
  style={{ 
    width: "100vw",
    height: "100vh", 
    backgroundImage: `url(${falzePix})`, // Set falzePix as background image
    backgroundSize: "cover", // Ensure the background image covers the container
    backgroundPosition: "center", // Position the background image at the center vertically
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${falzePix})`,
    color: "white",
    fontSize: "2rem",
    textShadow: "0 0 5px rgba(0, 0, 0, 0.5)", // Add text shadow for better visibility
  }}
>
  <div>
  <h2 className="text-center font p-5" style={{marginBottom:"18%"}}>  Let the countdown begin</h2>
  <div className="d-flex justify-content-center align-items-center text-center mt-5 font">

    
  <AnimatePresence>
        <motion.section
         initial={{ opacity: 0, y: 100 }} // Start from below the viewport
         animate={{ opacity: 1, y: 0 }} // Animate to top of the viewport
         transition={{ duration: 1 }} // Animate out with scale 0
         className="shadow  mb-1 bg-black rounded mx-3 text-light"
        >
          <p>{timerDays}</p>
          <p className="">
            <small>Days</small>
          </p>
        </motion.section>
      </AnimatePresence>
    
                
      <AnimatePresence>
        <motion.section
         initial={{ opacity: 0, y: 100 }} // Start from below the viewport
         animate={{ opacity: 1, y: 0 }} // Animate to top of the viewport
         transition={{ duration: 1 }} // Animate out with scale 0
         className="shadow  mb-1 bg-black rounded mx-3 custom-text "
        >
          <p>{timerMinuites}</p>
          <p className="">
            <small>Minutes</small>
          </p>
        </motion.section>
      </AnimatePresence>
     
      <AnimatePresence>
        <motion.section
         initial={{ opacity: 0, y: 100 }} // Start from below the viewport
         animate={{ opacity: 1, y: 0 }} // Animate to top of the viewport
         transition={{ duration: 1 }} // Animate out with scale 0
         className="shadow  mb-1 bg-black rounded mx-3"
        >
          <p>{timerSeconds}</p>
          <p className="">
            <small>Seconds</small>
          </p>
        </motion.section>
      </AnimatePresence>
  </div>
  


  </div>

</motion.div>


    </>
   
  );
}

export default App;
