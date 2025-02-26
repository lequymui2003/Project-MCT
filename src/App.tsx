import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CompetitionPage from "./pages/CompetitionPage"; // Import trang mới

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competition" element={<CompetitionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
