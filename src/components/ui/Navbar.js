import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
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
              <h2>Marvel</h2>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-3" + (isActive ? "active" : "")
              }
              to="/dc"
            >
              <h2>DC</h2>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-3" + (isActive ? "active" : "")
              }
              to="/search"
            >
              <h2>Search</h2>
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <button
              className="nav-item nav-link btn mx-5 "
              onClick={handleLogout}
            >
              <h2>Logout</h2>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
