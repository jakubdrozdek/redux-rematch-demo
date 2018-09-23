import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./Nav.css";

const items = [
  { route: "/cart", label: "Cart" },
  { route: "/counter", label: "Counter" }
];

export class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        {items.map(item => (
          <NavLink
            key={item.route}
            to={item.route}
            className="Nav-link"
            activeClassName="Nav-link--active"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    );
  }
}

export default withRouter(Nav);
