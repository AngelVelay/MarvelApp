import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const navigate = useNavigate();
  const { dispatch, user } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.LOGOUT,
    });

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-5" to="/">
          <img
            src={"./assets/heroes/marvel-logo.png"}
            alt="logo"
            style={{ width: 300 }}
          />
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-3" + (isActive ? "active" : "")
              }
              to="/marvel"
            >
              <h3>Marvel</h3>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-3" + (isActive ? "active" : "")
              }
              to="/dc"
            >
              <h3>DC</h3>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-3" + (isActive ? "active" : "")
              }
              to="/search"
            >
              <h3>Search</h3>
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <h3 className="nav-item nav-link text-info ">Hola,{user.name}</h3>
            <button
              className="nav-item nav-link btn btn-outline-primary mx-5 "
              onClick={handleLogout}
            >
              <h3>Logout</h3>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
