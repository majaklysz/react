import TourSec from "../components/TourSec";

export default function Tours() {
  return (
    <section className="tours">
      <div>
        <TourSec
          headline="Mystical Marrakech Marvels"
          image="public\images\marrakech.jpg"
          intro="Explore the enchanting city of Marrakech, where ancient traditions meet modern luxury. Immerse yourself in the vibrant markets of the Medina, visit historic palaces, and savor the flavors of Moroccan cuisine. 7 days of cultural immersion await."
          price="1,299"
        />
      </div>
      <div>
        <TourSec
          headline="Santorini Sunset Serenity"
          image="public\images\santoriniSunset.jpg"
          intro="Experience the magic of Santorini's breathtaking sunsets and pristine beaches. This 5-day island escape includes private yacht excursions, wine tasting in vineyards overlooking the Aegean Sea, and luxurious accommodations with panoramic views."
          price="1,899"
        />
      </div>
      <div>
        <TourSec
          headline="Costa Rica Rainforest Adventure"
          image="public\images\costaRicaRainforest.jpg"
          intro=" Embark on an adrenaline-pumping journey through the lush rainforests of Costa Rica. Zip-line through the canopy, hike to hidden waterfalls, and spot incredible wildlife. 10 days of eco-adventure await you in this tropical paradise."
          price="2,499"
        />
      </div>
    </section>
  );
}
