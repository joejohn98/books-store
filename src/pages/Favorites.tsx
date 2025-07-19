import { useBooksContext } from "../context/BooksContext";

const Favorites: React.FC = () => {
  const { favorites, loading } = useBooksContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-center text-gray-600">
          Loading Favorites...
        </p>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <p className="text-center text-xl text-gray-600 mt-24">
        No favorite books yet.
      </p>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Books</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((favorite) => (
          <li
            key={favorite.id}
            className="mb-2 p-2 border border-gray-300 rounded shadow-md"
          >
            <div className="w-full flex-col justify-between items-center">
              <img
                src={favorite.image}
                alt={favorite.title}
                className="w-full h-[320px] object-fit rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">{favorite.title}</h2>
              <p className="text-gray-700 mb-2">Author: {favorite.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
