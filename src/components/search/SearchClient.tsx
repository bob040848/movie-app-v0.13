'use client';

import { Header } from '@/components/header';
import { MovieCard } from '@/components/movie';
import { useSearch } from '@/hooks/useSearch';
import { Skeleton } from '@/components/ui/skeleton';

export const SearchClient = () => {
  const { query, setQuery, movies, isLoading } = useSearch();

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setQuery} onGenreSelect={() => {}} searchResults={movies} />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Search Results</h2>
        {isLoading ? (
          <SkeletonCarousel />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

const SkeletonCarousel = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(8)].map((_, i) => (
      <Skeleton key={i} className="h-64 w-full" />
    ))}
  </div>
);