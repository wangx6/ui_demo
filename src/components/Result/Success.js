import { useLocation } from "react-router-dom";

const Success = () => {
    const location = useLocation();

    return ( <div className="lqe__success__page">
Success: {location.state.detail}
    </div> );
}
 
export default Success