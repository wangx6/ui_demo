import React from 'react';
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();

  return (
    <div className="lqe-success-page">Success: {location.state.detail}</div>
  );
};

export default Success;
