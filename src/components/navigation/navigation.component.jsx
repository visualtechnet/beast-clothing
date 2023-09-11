import React from "react";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";
import CrownLogo from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link>
            <img src={CrownLogo} style={{ maxWidth: "250" }} />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
