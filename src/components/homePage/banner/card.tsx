import { useState } from "react";
import { motion } from "framer-motion";


interface CardContent {
  title: string;
  description: string;
  key: number;
}

export function Card({ title, description }: CardContent) {
  const [showCardClass, setShowCardClass] = useState(true);

  function handleCardText() {
    setShowCardClass(!showCardClass);
  }

  const animateStagger = {
    initial: { opacity: 0, y: "-15%" },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 }, once: false },
  };

  return (
    <>
      <motion.div
        className={`card ${showCardClass ? "" : "show-text"}`}
        onClick={handleCardText}
        variants={animateStagger}
      >
        <div className="card-title">
          <h2>{title}</h2>
          <img src="/src/assets/icons/focus.svg" />
        </div>
        <div className="card-text">
          <p>{description}</p>
        </div>
      </motion.div>
    </>
  );
}
