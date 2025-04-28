import axios from 'axios';
import { TMDB_BASE_URL } from '@/constants/api';

const api = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default api;