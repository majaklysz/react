import { useState } from "react";

export default function Section2() {
  const [input, setInput] = useState("");

  return (
    <section className="section2">
      <h1>Plan Your Dream Getaway</h1>
      <p>
        Ready to embark on your next adventure? Fill out the form below to start
        planning your dream getaway with JetSet Journeys. Our travel experts are
        here to tailor your journey to perfection, ensuring an unforgettable
        experience that suits your preferences and interests. Lets make your
        travel dreams a reality!
      </p>
      <form>
        <input
          placeholder="Where To?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
      <h2>{input}</h2>
    </section>
  );
}
