'use client';

import { Header } from '@/components/header';
import { MovieCarousel } from '@/components/movie';
import { useMovies } from '@/hooks/useMovies';
import { useSearch } from '@/hooks/useSearch';
import { Skeleton } from '@/components/ui/skeleton';

export const HomeClient = () => {
  const { movies: nowPlaying, isLoading: nowPlayingLoading, error: nowPlayingError } = useMovies('nowPlaying');
  const { movies: popular, isLoading: popularLoading, error: popularError } = useMovies('popular');
  const { movies: topRated, isLoading: topRatedLoading, error: topRatedError } = useMovies('topRated');
  const { movies: upcoming, isLoading: upcomingLoading, error: upcomingError } = useMovies('upcoming');
  const { query, setQuery, movies: searchResults } = useSearch();

  
  console.log('Now Playing:', { nowPlaying, nowPlayingLoading, nowPlayingError });
  console.log('Popular:', { popular, popularLoading, popularError });
  console.log('Top Rated:', { topRated, topRatedLoading, topRatedError });
  console.log('Upcoming:', { upcoming, upcomingLoading, upcomingError });

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setQuery} onGenreSelect={() => {}} searchResults={searchResults} />
      <main className="container mx-auto p-4">
        <section>
          <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
          {nowPlayingError ? (
            <p className="text-red-500">Error loading Now Playing movies</p>
          ) : nowPlayingLoading ? (
            <SkeletonCarousel />
          ) : nowPlaying.length === 0 ? (
            <p>No movies available</p>
          ) : (
            <MovieCarousel movies={nowPlaying} />
          )}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular</h2>
          {popularError ? (
            <p className="text-red-500">Error loading Popular movies</p>
          ) : popularLoading ? (
            <SkeletonCarousel />
          ) : popular.length === 0 ? (
            <p>No movies available</p>
          ) : (
            <MovieCarousel movies={popular} />
          )}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
          {topRatedError ? (
            <p className="text-red-500">Error loading Top Rated movies</p>
          ) : topRatedLoading ? (
            <SkeletonCarousel />
          ) : topRated.length === 0 ? (
            <p>No movies available</p>
          ) : (
            <MovieCarousel movies={topRated} />
          )}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Upcoming</h2>
          {upcomingError ? (
            <p className="text-red-500">Error loading Upcoming movies</p>
          ) : upcomingLoading ? (
            <SkeletonCarousel />
          ) : upcoming.length === 0 ? (
            <p>No movies available</p>
          ) : (
            <MovieCarousel movies={upcoming} />
          )}
        </section>
      </main>
    </div>
  );
};

const SkeletonCarousel = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(4)].map((_, i) => (
      <Skeleton key={i} className="h-64 w-full" />
    ))}
  </div>
);