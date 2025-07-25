import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { BooksProvider } from "./context/BooksContext";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <BooksProvider>
          <div className="container mx-auto p-4 font-[Arial]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/read" element={<Read />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BooksProvider>
      </Router>
    </>
  );
}

export default App;
