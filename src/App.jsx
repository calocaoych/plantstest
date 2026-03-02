import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./views/HomePage.jsx";
import PlantManagerPage from "./views/PlantManagerPage.jsx";
import AboutPage from "./views/AboutPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<PlantManagerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Footer />
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;