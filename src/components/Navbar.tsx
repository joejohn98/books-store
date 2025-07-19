import { Link } from "react-router-dom";
import { useBooksContext } from "../context/BooksContext";

const Navbar: React.FC = () => {
  const { favorites, readBooks } = useBooksContext();

  return (
    <div>
      <nav className="bg-blue-400 p-4 rounded-md shadow-md">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:text-gray-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="text-white font-semibold hover:text-gray-200 relative"
            >
              {" "}
              Favorites
            </Link>
            {favorites.length > 0 && (
              <sup className="absolute -top-2 -right-3 rounded-full text-xs text-white bg-red-600 px-2 py-1 ">
                {favorites.length}
              </sup>
            )}
          </li>
          <li>
            <Link
              to="/read"
              className="text-white font-semibold hover:text-gray-200 relative"
            >
              Read
            </Link>
            {readBooks.length > 0 && (
              <sup className="absolute -top-2 -right-3 rounded-full text-xs text-white bg-red-600 px-2 py-1 ">
                {readBooks.length}
              </sup>
            )}
          </li>
          <li>
            <Link
              to="/profile"
              className="text-white font-semibold hover:text-gray-200"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
