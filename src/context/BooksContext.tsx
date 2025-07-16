import { createContext, useEffect, useState } from "react";
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
  user: User;
}

const BooksContext = createContext<BooksContextProps | null>(null);

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
};
