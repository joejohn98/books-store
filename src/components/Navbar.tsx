import { Link } from "react-router-dom"


const Navbar:React.FC = () => {
  return (
    <div>
      <nav className="bg-blue-400 p-4 rounded-md shadow-md">
        <ul className="flex space-x-4">
            <li>
                <Link to="/" className="text-white font-semibold hover:text-gray-200">Home</Link>
            </li>
            <li>
                <Link to="/favorites" className="text-white font-semibold hover:text-gray-200">Favorites</Link>
            </li>
            <li>
                <Link to="/read" className="text-white font-semibold hover:text-gray-200">Read</Link>
            </li>
            <li>
                <Link to="/profile" className="text-white font-semibold hover:text-gray-200">Profile</Link>
            </li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
