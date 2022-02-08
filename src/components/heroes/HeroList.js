import React, { useMemo } from "react";
import { getHerobyPublisher } from "../selectors/getHeroesbyPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHerobyPublisher(publisher), [publisher]);

  return (
    <div className="container">
      <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero}></HeroCard>
        ))}
      </div>
    </div>
  );
};
