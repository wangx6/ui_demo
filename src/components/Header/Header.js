import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

export default function Header() {
  return (
    <div className="lqe-hdr">
      <div className="lqe-hdr__top__navbar">
        <div className="lqe-hdr__top__navbar__left-section">LIFE DEMO</div>
        <div className="lqe-hdr__top__navbar__right-section">
          <div className="lqe-hdr__phone-section">
            <a className="lqe-hdr-phone__link" href="tel:+1-51111-111">
              051111-111
            </a>
          </div>
          <div className="lqe-hdr__login-section">
            <button className="lqe-hdr__my-life__button" type="button"></button>
          </div>
        </div>
      </div>
      <HeaderMenu></HeaderMenu>
    </div>
  );
}
