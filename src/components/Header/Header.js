import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

import NotificationContext from "../../contexts/NotificationContext";

export default function Header() {
  const { service } = useContext(NotificationContext);
  console.log(service);
  const refShowNotification = useRef(service.showNotification);

  useEffect(() => {
    setTimeout(() => {
      refShowNotification.current("OK", "this is ok", "Success");
    }, 2000);
  }, []);

  return (
    <div className="lqe-hdr">
      <div className="lqe-top-navbar-header">
        <div className="lqe-left-top-navbar-sec">LIFE DEMO</div>
        <div className="lqe-right-top-navbar-sec">
          <div className="lqe-left-sec">
            <a className="lqe-phone-link" href="tel:+1-51111-111">
              051111-111
            </a>
          </div>
          <div className="lqe-right-sec">
            <button className="lqe-my-life-button" type="button"></button>
          </div>
        </div>
      </div>
      <HeaderMenu></HeaderMenu>
    </div>
  );
}
