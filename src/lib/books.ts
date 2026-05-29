import type { OpenLibraryBook } from "./types";

const BASE_URL = "https://openlibrary.org/search.json";

export async function buscarLibros(query: string, limit = 20): Promise<OpenLibraryBook[]> {
  const params = new URLSearchParams({ q: query, limit: String(limit) });
  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) throw new Error(`Open Library error: ${res.status}`);
  const data = await res.json();
  return (data.docs ?? []) as OpenLibraryBook[];
}

export function getCoverUrl(coverId: number, size: "S" | "M" | "L" = "M") {
  return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
}
