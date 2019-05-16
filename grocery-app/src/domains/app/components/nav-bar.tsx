import React from "react";

import { NavLink } from "react-router-dom";

const LINKS = [{ label: "Home", route: "" }, { label: "Add Item", route: "add" }];

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Groceries
      </NavLink>
      <div className="navbar-nav flex-row">
        {LINKS.map((link) => (
          <NavLink
            key={link.label}
            className="nav-item nav-link mr-3"
            activeClassName="active"
            exact={true}
            to={`/${link.route}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
