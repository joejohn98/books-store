import React from "react";
import { useBooksContext } from "../context/BooksContext";

interface BookProps {
  book: {
    id: number;
    title: string;
    author: string;
    image: string;
    read: boolean;
    price?: number;
  };
}

const Book: React.FC<BookProps> = ({ book }) => {
  const { addToFavorites, isFavorite, isRead, addToRead } = useBooksContext();
  return (
    <div className="border border-gray-300 p-3 rounded-lg shadow-md">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-[320px] object-fill mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-2">Author: {book.author}</p>
      <p className="text-gray-700 mb-2">
        Price: ${book.price?.toFixed(2) || 0}
      </p>
      <div className="mt-4 flex justify-between gap-2">
        <button
          className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => addToFavorites(book)}
        >
          {isFavorite(book.id) ? "Added to Favorites" : "Add to Favorites"}
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => addToRead(book)}
        >
          {isRead(book.id) ? "Added to Read" : "Add to Read"}
        </button>
      </div>
    </div>
  );
};

export default Book;
