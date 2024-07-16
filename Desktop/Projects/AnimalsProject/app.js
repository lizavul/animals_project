import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);

const title = "";

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const displayFact = (e) => {
  const animalSelected = e.target.alt;
  const index = Math.floor(
    Math.random() * animals[animalSelected].facts.length
  );
  const funFact = animals[animalSelected].facts[index];
  const p = document.getElementById("fact");
  p.innerHTML = funFact;
};

const images = [];
for (const animal in animals) {
  const image = (
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      role="button"
      onClick={displayFact}
    />
  );
  images.push(image);
}

const showBackground = false;

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title} </h1>
    {showBackground === true && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);