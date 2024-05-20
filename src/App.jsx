import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Terms from "./pages/Terms.jsx";
import Download from "./pages/Download.jsx";
import SendPicture from "./pages/SendPicture.jsx";
import Partners from "./pages/Partners.jsx";
import TheyWroteAboutUs from "./pages/TheyWroteAboutUs.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/download" element={<Download />} />
        <Route path="/send-picture" element={<SendPicture />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/they-wrote-about-us" element={<TheyWroteAboutUs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
