export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const ENDPOINTS = {
  nowPlaying: '/movie/now_playing',
  popular: '/movie/popular',
  topRated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
  search: '/search/movie',
  movieDetails: (id: number) => `/movie/${id}`,
  movieVideos: (id: number) => `/movie/${id}/videos`,
  genres: '/genre/movie/list',
  discover: '/discover/movie',
  trending: '/trending/movie/week',
  recommendations: (id: number) => `/movie/${id}/recommendations`,
};