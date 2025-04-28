export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
  };
  
  export type Video = {
    key: string;
    type: string;
    site: string;
  };