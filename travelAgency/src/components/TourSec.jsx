export default function TourSec({ headline, image, intro, price }) {
  return (
    <section>
      <h1>{headline}</h1>
      <img src={image} />
      <p>{intro}</p>
      <h2>${price}</h2>
    </section>
  );
}
