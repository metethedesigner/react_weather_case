// CSS
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// React Toastify
import { ToastContainer } from "react-toastify";

//Components
import Home from "./components/Home";
import SetApiKey from "./components/SetApiKey";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer autoClose={1800} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/set-api-key" element={<SetApiKey />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
