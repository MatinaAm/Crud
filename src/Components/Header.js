import React, { useState } from "react";
import {
  FaFolderOpen,
  FaListUl,
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaRegComments,
  FaRegEnvelope,
  FaSignInAlt,
} from "react-icons/fa";
import Search from "./Search";
import "./navbar.css";

export const Header = (props) => {



  return (
    <div id="navbar">
      <nav className="navigation">
        {/* <h1  className="brand-name">
          Brand
        </h1> */}
        <Search fill="black" />
       
        <div
          className="navigation-menu"
        >
          <ul>
            <li>
              <a href="/">
                <FaFolderOpen size={"22px"}  fill="#4a4a4a"/>
              </a>
            </li>
            <li>
              <a href="/">
                <FaRegCalendarAlt  size={"22px"} fill="#4a4a4a"/>
              </a>
            </li>
            <li>
              <a href="/">
                <FaRegComments size={"22px"} fill="#4a4a4a" />
              </a>
            </li>

            <li>
              <a href="/">
                <FaRegEnvelope size={"22px"} fill="#4a4a4a"/>
              </a>
            </li>
            <li>
              <a href="/">
                <FaListUl  size={"22px"} fill="#4a4a4a" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaSignInAlt size={"22px"}  fill="#4a4a4a"/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
