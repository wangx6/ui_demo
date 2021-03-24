import { useState, useEffect, createContext } from 'react';

// Define your context here
export const NotificationContext = createContext();

// Define your service here
export const NotificationService = props => {
  // state space
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState('OK');
  const [message, setMessage] = useState('tttt');
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

  const convertForB = () => {
    return {
      show, status, superTitle: title, message: `pre-${message}`
    }
  }

  const showNotification = (status, message, title) => {
    setShow(true);
    setStatus(status);
    setMessage(message);
    setTitle(title);
  }

  return <NotificationContext.Provider 
    value={{show, status, message, title, power: {showNotification, convertForB}}}>
    {props.children}
  </NotificationContext.Provider>
}