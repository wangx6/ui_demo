import React, {useState} from 'react';
import { CgClose } from "react-icons/cg";
import './CookieBanner.css';
import CookieIcon from '../../img/cookieIcon.png'
import VhiLogo from '../../img/cookieVhiLogo.png'

export default function CookieBanner() {

    const [isVisible, setIsVisible] = useState(false);

    function ShowCookieBanner() {
        setIsVisible(true);
        console.log('Show toggle cookie banner');
    }

    function hideCookieBanner() {
        setIsVisible(false);
        console.log('Hide toggle cookie banner');
    }

    return (
        <div className='util-cookie-banner'>
            <div className={`util-cookie-banner-container util-cookie-banner-container--${isVisible ? "show" : "hide"}`}>
                <div className='util-cookie-banner-container-hdr'>
                    <img src={VhiLogo} width='120' height='40' alt='Vhi Logo' />
                    <CgClose onClick={hideCookieBanner}></CgClose>
                </div>
                <div className='util-cookie-banner-container-content'>
                    <hr/>Cookie Banner Content
                </div>
            </div>
            <div className='util-cookie-banner__cookie-icon'>
                <img onClick={ShowCookieBanner} src={CookieIcon} width='35' height='35' alt='Cookie Icon' />
            </div>
            <div className={`util-cookie-banner__modal ${isVisible ? "show" : "hide"}`}></div>
        </div>
    )
}