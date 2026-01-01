/**
 * Genre/Category API Types
 */

export interface Genre {
  id: string;
  name: string;
  color: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface GenresResponse {
  genres: Genre[];
  total: number;
}
