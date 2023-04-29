import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const handleMainBlockClick = (index) => {
    const subBlock = document.getElementsByClassName("subBlock")[index];
    const arrow = document.getElementsByClassName("arrow")[index];
    subBlock.classList.toggle("subBlockActive");
    arrow.classList.toggle("arrowActive");
  };

  const handleBurgerClick = () => {
    const container = document.getElementsByClassName("container")[0];
    container.classList.toggle("containerFull");
  };
  return (
    <>
      <div className="container p-0 ">
        <div className="left  ">
          <div className={"mainBlock"}>
            <div className="logo"></div>
            <h3 className={"blockText"}>
              {" "}
              <span className={"diff"}>Mamba</span> Security
            </h3>
            <div onClick={handleBurgerClick} className={"burger"}>
              <i class="bx bx-menu-alt-left "></i>
            </div>
          </div>
          <div onClick={() => handleMainBlockClick(0)} className={"mainBlock"}>
            <i class="bx bxs-user-rectangle icon"></i>
            <h3 className={"blockText"}>Client</h3>
            <i class="bx bx-chevron-right arrow"></i>
          </div>
          <div className={"subBlock"}>
            <Link className="link" to="/">
              <i class="bx bx-circle circle"></i>
              <h3 className={"blockText"}>Manage Client</h3>
            </Link>
            <Link className="link" to="/postSite">
              <i class="bx bx-circle circle"></i>
              <h3 className={"blockText"}>Post Sites</h3>
            </Link>
          </div>
          <div onClick={() => handleMainBlockClick(1)} className={"mainBlock"}>
            <i class="bx bx-group icon"></i>
            <h3 className={"blockText"}>Security Team</h3>
            <i class="bx bx-chevron-right arrow"></i>
          </div>
          <div className={"subBlock"}>
            <Link className="link" to="/guards">
              <i class="bx bx-circle circle"></i>
              <h3 className={"blockText"}>Security Guards</h3>
            </Link>
            <Link className="link" to="/">
              <i class="bx bx-circle circle"></i>
              <h3 className={"blockText"}>Back Office Team</h3>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="nav">
            <div onClick={handleBurgerClick} className={"burgerMobile"}>
              <i class="bx bx-menu-alt-left "></i>
            </div>
            <div className="navInputWrapper">
              <i class="bx bx-search"></i>
              <input className="navInput" placeholder="Search" />
            </div>
            <div className="user">
              <div className={"profile"}></div>
            </div>
          </div>
          <div className={"subContainer"}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
