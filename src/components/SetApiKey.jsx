import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setKey } from "../features/ApiSlice";
import { validateApiKey } from "../utils";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetApiKey = () => {
  const [key, setApiKey] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const response = await validateApiKey(key);
    if (response) {
      dispatch(setKey(key));
      navigate(location.state?.return_url || "/");
      toast.success("You're logged in", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Your API Key is not valid.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="set-api">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Your API Key..."
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default SetApiKey;
