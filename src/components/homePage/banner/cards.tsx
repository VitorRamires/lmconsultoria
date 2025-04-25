import { cardsData } from "../../../utils/cardsInfo";
import { Card } from "./card";

export function BannerCards() {
  return (
    <>
      <div className="center">
        <div className="banner-cards">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
