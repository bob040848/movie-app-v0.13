'use client';

import { useState } from 'react';
import { useFetch } from '@/lib/swr';
import { ENDPOINTS } from '@/constants/api';
import { Movie } from '@/types/movie';

type SearchResponse = { results: Movie[] };

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const url = query.trim() ? `${ENDPOINTS.search}?query=${encodeURIComponent(query.trim())}&language=en-US` : null;
  const { data, error, isLoading } = useFetch<SearchResponse>(url);

  return {
    query,
    setQuery,
    movies: data?.results.slice(0, 5) || [],
    error,
    isLoading,
  };
};