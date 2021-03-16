import React from 'react'
import { useContext } from 'react'
import NotificationContext from '../../contexts/NotificationContext';

export default function GlobalErrorPopup() {
  const {show, status, title, message} = useContext(NotificationContext);

  return (show ?
    <div className={`lqe-global-notification-popup ${status.toLowerCase()}`}>
      <div className="lqe-global-notification-popup__dialog">
        <div className="lqe-global-notification-popup__content">
          <div className="lqe-global-notification-popup-body">
            <div className="lqe-global-notification-popup__title">{title}</div>
            <div className="lqe-global-notification-popup-description">{message}</div>
          </div>
        </div>
      </div>
      <div className={`lqe-global-notification-popup__modal`}></div>
    </div> : null
  )
}