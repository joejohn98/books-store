export interface Book {
  id: number;
  title: string;
  author: string;
  publisher?: string;
  year?: number;
  image: string;
  price?: number;
  read: boolean;
}

export interface User {
  name: string;
  bio: string;
  img: string;
}