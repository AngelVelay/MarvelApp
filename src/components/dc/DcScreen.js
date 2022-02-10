import React from "react";
import { HeroList } from "../heroes/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1>Heroes de DC Comics</h1>
      <HeroList publisher={"DC Comics"} />
    </div>
  );
};
