import { createContext, useContext, useEffect, useState } from "react";
import type { Book, User } from "../types";

interface BooksContextProps {
  books: Book[];
  favorites: Book[];
  readBooks: Book[];
  addToRead: (book: Book) => void;
  addToFavorites: (book: Book) => void;
  isFavorite: (id: number) => boolean;
  isRead: (id: number) => boolean;
  loading: boolean;
  error: string | null;
  user: User | null;
}

const BooksContext = createContext<BooksContextProps | null>(null);

export const useBooksContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
}

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [favorites, setFavorites] = useState<Book[]>([]);
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://allbooks.free.beeceptor.com/api/data"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data.books);
        setUser(data.user);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const addToRead = (book: Book) => {
    if (!readBooks.some((b) => b.id === book.id)) {
      setReadBooks((prev) => [...prev, book]);
    }
  };
  const addToFavorites = (book: Book) => {
    const isAlreadyFavorite = favorites.find((b) => b.id === book.id);
    if (!isAlreadyFavorite) {
      setFavorites((prev) => [...prev, book]);
    }
  };

  const isFavorite = (id: number) => {
    return favorites.some((book) => book.id === id);
  };

  const isRead = (id: number) => {
    return readBooks.some((book) => book.id === id);
  };
  return (
    <>
      <BooksContext.Provider
        value={{
          books,
          favorites,
          readBooks,
          addToRead,
          addToFavorites,
          isFavorite,
          isRead,
          loading,
          error,
          user,
        }}
      >
        {children}
      </BooksContext.Provider>
    </>
  );
};
