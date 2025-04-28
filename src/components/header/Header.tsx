'use client';

import { SearchBar, GenreFilter, ThemeToggle } from '@/components/header';
import { Movie } from '@/types/movie';

type HeaderProps = {
  onSearch: (query: string) => void;
  onGenreSelect: (genreId: number) => void;
  searchResults: Movie[];
};

export const Header = ({ onSearch, onGenreSelect, searchResults }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Movie App</h1>
        <div className="flex items-center space-x-4">
          <SearchBar onSearch={onSearch} searchResults={searchResults} />
          <GenreFilter onGenreSelect={onGenreSelect} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};