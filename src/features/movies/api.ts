import api from '@/lib/axios';
import { ENDPOINTS } from '@/constants/api';

export const getMovieVideos = async (movieId: number) => {
  const response = await api.get(`${ENDPOINTS.movieVideos(movieId)}?language=en-US`);
  return response.data.results;
};