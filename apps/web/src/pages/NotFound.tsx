import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/404") {
      navigate("/404");
    }
  }, [location, navigate]);

  return <div>404!!</div>;
};

export default NotFound;
