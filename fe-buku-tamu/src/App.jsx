import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditTamu from "./pages/UbahTamu";
import TambahTamu from "./pages/TambahTamu";
import LihatTamu from "./pages/LihatTamu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tambah" element={<TambahTamu />} />
          <Route exact path="/ubahtamu/:id" element={<EditTamu />} />
          <Route exact path="/lihat/:id" element={<LihatTamu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
