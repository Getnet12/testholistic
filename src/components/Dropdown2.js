import React, { useState } from "react";
import {BuDropdown} from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown2() {
  const [dropdown2, setDropdown2] = useState(false);
  return (
    <>
      <ul
        className={dropdown2 ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown2(!dropdown2)}
      >
        {BuDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown2(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Dropdown2;