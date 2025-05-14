import { cardsData } from "../../../utils/cardsInfo";
import { Card } from "./card";
import { motion } from "framer-motion";

export function BannerCards() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2, // tempo entre cada card
      },
    },
  };

  return (
    <>
      <div className="center">
        <motion.div
          variants={containerVariants}
          initial="initial"
           whileInView="animate"
          className="banner-cards"
          viewport={{ once: false, amount: 0.2 }} // quantidade de visibilidade para ativar a animação
        >
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
