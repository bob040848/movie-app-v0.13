'use client';

import  useSWR  from 'swr';
import api from './axios';

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
export const useFetch = <T>(url: string | null) => {
  const { data, error } = useSWR<T>(url, fetcher);
  return { data, error, isLoading: !data && !error };
};