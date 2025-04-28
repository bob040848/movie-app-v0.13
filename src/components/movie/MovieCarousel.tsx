'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { MovieCard } from '@/components/movie';
import { Movie } from '@/types/movie';

type MovieCarouselProps = {
  movies: Movie[];
};

export const MovieCarousel = ({ movies }: MovieCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/3">
            <MovieCard movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};