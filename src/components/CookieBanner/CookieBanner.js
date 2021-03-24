import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import CookieIcon from '../../img/cookieIcon.png'
import VhiLogo from '../../img/cookieVhiLogo.png'

export default function CookieBanner() {

  const [isVisible, setIsVisible] = useState(false);

  function ShowCookieBanner() {
    setIsVisible(true);
  }

  function hideCookieBanner() {
    setIsVisible(false);
  }

  return (
    <div className='util-cookie-banner'>
      <div className={`util-cookie-banner-container util-cookie-banner-container--${isVisible ? "show" : "hide"}`}>
        <div className='util-cookie-banner-container-hdr'>
          <img src={VhiLogo} width='120' height='40' alt='Vhi Logo' />
          <CgClose className='util-cookie-banner__cookie-icon-hide' onClick={hideCookieBanner}></CgClose>
        </div>
        <div className='util-cookie-banner-container-content'>
          <hr />Cookie Banner Content
                </div>
      </div>
      <div className='util-cookie-banner__cookie-icon'>
        <img className='util-cookie-banner__cookie-icon-show' onClick={ShowCookieBanner} src={CookieIcon} width='35' height='35' alt='Cookie Icon' />
      </div>
      <div className={`util-cookie-banner__modal ${isVisible ? "show" : "hide"}`}></div>
    </div>
  )
}