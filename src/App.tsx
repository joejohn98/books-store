import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { BooksProvider } from "./context/BooksContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <BooksProvider>
          <div className="container mx-auto p-4 font-[Arial]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<div>Favorites Page</div>} />
              <Route path="/read" element={<div>Read Page</div>} />
              <Route path="/profile" element={<div>Profile Page</div>} />
            </Routes>
          </div>
        </BooksProvider>
      </Router>
    </>
  );
}

export default App;
