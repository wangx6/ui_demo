import React from 'react'
import { useState, useEffect } from 'react'
import './GlobalErrorPopup.css';

export default function GlobalErrorPopup() {

    const [show, setShow] = useState(true);
    // const [colour, setColour] = useState(true);
    // const [bgcolour, setBgColour] = useState(true);

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false)
        }, 3000)
        return () => {
            clearTimeout(timeId)
        }
    }, []);

    // If show is false the component will return null and stop here
    if (!show) {
        return null;
    }

    let colour = "green";
    let bgcolour = "white";
    let title = "SUCCESS";
    let description = "Successfully completed request."
    
    return (
        <div id="lqe-global-error-popup" className="modal modal-scroll" style={{display: "block"}}>
            <div className="lqe-global-error-popup-dialog">
                <div className="lqe-global-error-popup-content" style={{backgroundColor: bgcolour}}>
                    <div className="lqe-global-error-popup-body">
                        <div className="lqe-global-error-popup-title" style={{color: colour}}>{title}</div>
                        <div className="lqe-global-error-popup-description">{description}</div>
                    </div>
                </div>
            </div>            
        </div>
    )
}