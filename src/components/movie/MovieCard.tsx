'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MovieTrailer } from '@/components/movie';
import { Movie, Video } from '@/types/movie';
import { IMAGE_BASE_URL } from '@/constants/api';
import { useFetch } from '@/lib/swr';
import { ENDPOINTS } from '@/constants/api';

type MovieCardProps = {
  movie: Movie;
};

type VideoResponse = { results: Video[] };

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { data } = useFetch<VideoResponse>(
    `${ENDPOINTS.movieVideos(movie.id)}?language=en-US&api_key=${process.env.TMDB_API_KEY}`
  );
  const trailer = data?.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube') || null;

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="w-full h-auto"
        />
      </CardContent>
      <CardFooter className="p-2 flex justify-between">
        <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
        <MovieTrailer trailer={trailer} />
      </CardFooter>
    </Card>
  );
};