import { useState, useEffect } from 'react';

function NotificationModel() {
  // state space
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState('OK');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if(show === true) {
      setTimeout(() => {
        console.log('i am going to close');
        setShow(false);
      }, 3000)
    }
  }, [show]);

  // power space
  const showNotification = (status, message, title) => {
    setShow(true);
    setStatus(status);
    setMessage(message);
    setTitle(title);
  }

  // api space
  return {
    show, status, title, message, showNotification,
    setShow,
  }
}

export default NotificationModel;