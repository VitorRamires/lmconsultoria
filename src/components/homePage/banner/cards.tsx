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
      <motion.div
        className="banner-cards"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }} // quantidade de visibilidade para ativar a animação
      >
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </motion.div>
    </>
  );
}
