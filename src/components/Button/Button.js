import React from 'react';
import "./Button.css"

const Button = (props) => {

    return ( 
    <button className="lqe__button--common" onClick={props.handleClick}>
    {props.text}
    </button> );
}
 
export default Button;