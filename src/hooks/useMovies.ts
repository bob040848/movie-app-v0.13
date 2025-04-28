'use client';

import { useFetch } from '@/lib/swr';
import { ENDPOINTS } from '@/constants/api';
import { Movie } from '@/types/movie';

type MovieResponse = { results: Movie[] };

export const useMovies = (type: 'nowPlaying' | 'popular' | 'topRated' | 'upcoming') => {
  const { data, error, isLoading } = useFetch<MovieResponse>(
    `${ENDPOINTS[type]}?language=en-US&api_key=${process.env.TMDB_API_KEY}`
  );
  return { movies: data?.results || [], error, isLoading };
};