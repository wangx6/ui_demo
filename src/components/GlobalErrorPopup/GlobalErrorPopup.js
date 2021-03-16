import React from 'react'
import { useState, useEffect } from 'react'


const statuses = ['OK', 'WARN', 'ERROR'];

export default function GlobalErrorPopup() {

  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("OK");

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false)
    }, 3000)
    return () => {
      clearTimeout(timeId)
    }
  }, [show]);

  let colour;
  let bgcolour;
  let title;
  let description;

  useEffect(() => {
    if (status === "OK") {
      colour = "green";
      bgcolour = "white";
      title = "SUCCESS";
      description = "Successfully completed request."
    }
    else if (status === "WARN") {
      colour = "orange";
      bgcolour = "#0";
      title = "WARNING";
      description = "Request returned a warning..."
    }
    else if (status === "ERROR") {
      colour = "red";
      bgcolour = "white";
      title = "ERROR";
      description = "Error with request."
    }
  }, [status]);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  return (
    <div className=" lqe-global-error-popup modal modal-scroll" style={{ display: "block" }}>
      <div className="lqe-global-error-popup-dialog">
        <div className="lqe-global-error-popup-content" style={{ backgroundColor: bgcolour }}>
          <div className="lqe-global-error-popup-body">
            <div className="lqe-global-error-popup-title" style={{ color: colour }}>{title}</div>
            <div className="lqe-global-error-popup-description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}