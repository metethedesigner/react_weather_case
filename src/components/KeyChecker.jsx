import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function KeyChecker({ children }) {
  const { api_key } = useSelector((state) => state.api);
  const location = useLocation();
  if (!api_key) {
    return (
      <Navigate
        to="/set-api-key"
        state={{
          return_url: location.pathname,
        }}
      />
    );
  }

  return children;
}
