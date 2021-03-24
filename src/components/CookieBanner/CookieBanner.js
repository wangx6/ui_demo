import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import CookieIcon from '../../img/cookieIcon.png'
import VhiLogo from '../../img/cookieVhiLogo.png'

export default function CookieBanner() {

  const [isVisible, setIsVisible] = useState(false);

  function onShowCookieBanner() {
    setIsVisible(true);
  }

  function onHideCookieBanner() {
    setIsVisible(false);
  }

  return (
    <div className='util-cookie-banner'>
      <div className={`util-cookie-banner-container util-cookie-banner-container--${isVisible ? "visible" : "invisible"}`}>
        <div className='util-cookie-banner-container-hdr'>
          <img src={VhiLogo} width='120' height='40' alt='Vhi Logo' />
          <CgClose className='util-cookie-banner__cookie-icon-hide' onClick={onHideCookieBanner}></CgClose>
        </div>
        <div className='util-cookie-banner-container-content'>
          <hr />Cookie Banner Content
                </div>
      </div>
      <div className='util-cookie-banner__cookie-icon'>
        <img className='util-cookie-banner__cookie-icon-show' onClick={onShowCookieBanner} src={CookieIcon} alt='Cookie Icon' />
      </div>
      <div className={`util-cookie-banner__modal ${isVisible ? "visible" : "invisible"}`}></div>
    </div>
  )
}