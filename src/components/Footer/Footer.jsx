import React from "react";
import { ReactComponent as GithubLogo } from "../../resources/icons/github-mark-white.svg";
import "./style.scss";

/** 
 * Renders Footer component by default
 * @returns Footer component
 */
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p className="description">Uni Navigators Computer Training Programme Fall 2022</p>
        <a href="https://github.com/seanang99/sm-cards">
          <GithubLogo className="githubLogo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
