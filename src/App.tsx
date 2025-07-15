import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Router>
      <div className='container mx-auto p-4 font-[Arial]'>
        <Navbar />
        <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/favorites" element={<div>Favorites Page</div>} />
        <Route path="/read" element={<div>Read Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Routes>
      </div>
      </Router>

    </>
  )
}

export default App
