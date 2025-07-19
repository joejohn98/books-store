import { useBooksContext } from "../context/BooksContext";

const Read: React.FC = () => {
  const { readBooks, loading } = useBooksContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-center text-gray-600">
          Loading Read Books...
        </p>
      </div>
    );
  }

  if (readBooks.length === 0) {
    return (
      <p className="text-center text-xl text-gray-600 mt-24">
        No books read yet.
      </p>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books You've Read</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {readBooks.map((book) => (
          <li
            key={book.id}
            className="mb-2 p-2 border border-gray-300 rounded shadow-md"
          >
            <div className="w-full flex flex-col justify-between items-center">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[320px] object-fit rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-700 mb-2">Author: {book.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Read;
