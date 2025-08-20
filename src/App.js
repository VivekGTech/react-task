import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import FooterNav from "./components/FooterNav";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="mobile-frame d-flex flex-column">
          <div className="flex-grow-1 p-3 overflow-auto">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
          <FooterNav />
        </div>
      </div>
    </Router>
  );
}

export default App;
