import Book from "../components/Book";
import { useBooksContext } from "../context/BooksContext";

const Home: React.FC = () => {
  const { books, loading, error } = useBooksContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-center text-blue-500">Loading Books...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-center text-red-500">Error: {error}</p>
      </div>
    );
  }
  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-center text-gray-500">No books available</p>
      </div>
    );
  }
  return (
    <div className="p-4">
        <h1 className="text-4xl font-bold mb-4">Books Library</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
    </div>
    </div>
  );
};

export default Home;
