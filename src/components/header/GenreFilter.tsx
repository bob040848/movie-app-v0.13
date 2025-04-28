'use client';

import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { GENRES } from '@/constants/genres';

type GenreFilterProps = {
  onGenreSelect: (genreId: number) => void;
};

export const GenreFilter = ({ onGenreSelect }: GenreFilterProps) => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleSelect = (genreId: number, genreName: string) => {
    setSelectedGenre(genreName);
    onGenreSelect(genreId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedGenre}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleSelect(0, 'All Genres')}>
          All Genres
        </DropdownMenuItem>
        {GENRES.map((genre) => (
          <DropdownMenuItem
            key={genre.id}
            onClick={() => handleSelect(genre.id, genre.name)}
          >
            {genre.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};