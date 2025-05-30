export type Movie = {
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type MovieAPIResponse = Movie & {
  adult: boolean;
  genre_ids: number[];
  video: boolean;
};
