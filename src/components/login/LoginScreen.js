import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({
      type: types.LOGIN,
      payload: {
        name: "Angel",
      },
    });

    navigate("/marvel", {
      replace: true,
    });
  };

  return (
    <div className=" bg-dark row justify-content-center align-items-center vh-100">
      <div
        className="card text-center bg-dark text-white"
        style={{ width: "40rem" }}
      >
        <img
          className="card-img-top mx-auto d-block img-fluid"
          src={"./assets/heroes/marvel-logo.png"}
          alt="marvel"
          style={{ width: 600 }}
        />
        <div className="card-body">
          <h2 className="card-title">Marvel App</h2>
          <p className="card-text">
            Aplicacion hecha para buscar algunos superheroes de MARVEL y DC
            Comics
          </p>
          <button
            className="btn btn-outline-primary w-100"
            onClick={handleLogin}
          >
            <b>Entra para buscar superheroes</b>
          </button>
        </div>
      </div>
    </div>
  );
};
