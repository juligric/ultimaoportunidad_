export type Rol = "admin" | "user";

export interface Profile {
  id: string;
  nombre: string | null;
  rol: Rol;
  created_at: string;
}

export interface Favorito {
  id: string;
  usuario_id: string;
  book_id: string;
  titulo: string;
  autores: string | null;
  thumbnail: string | null;
  added_at: string;
}

// Formato que devuelve Open Library API
export interface OpenLibraryBook {
  key: string;
  title: string;
  author_name?: string[];
  subject?: string[];
  cover_i?: number;
  first_publish_year?: number;
  isbn?: string[];
}
