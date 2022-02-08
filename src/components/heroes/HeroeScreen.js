import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHerobyId } from "../selectors/getHerobyId";

export const HeroeScreen = () => {
  const navigate = useNavigate();
  const { heroeId } = useParams();

  const hero = useMemo(() => getHerobyId(heroeId), [heroeId]);

  console.log(hero);
  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className=" row mt-5">
      <div className=" col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className=" col-8 animate__animated animate__fadeInUp">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>AlterEgo: {alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publisher: {publisher}</b>
          </li>
          <li className="list-group-item">
            <b>First Appearance: {first_appearance}</b>
          </li>
        </ul>
        <h4>Characters: </h4>
        <p>{characters}</p>

        <button className="btn btn-outline-info w-100" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
