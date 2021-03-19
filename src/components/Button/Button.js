import React from 'react';

const Button = (props) => {

    return ( 
    <button className="lqe-button__primary" onClick={props.handleClick}>
    {props.text}
    </button> );
}
 
export default Button;