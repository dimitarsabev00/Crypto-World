import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";
function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />

                <Route path="/exchanges" element={<Exchanges />} />

                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />

                <Route path="/crypto/:coinId" element={<CryptoDetails />} />

                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </div>
    </Router>
  );
}

export default App;
