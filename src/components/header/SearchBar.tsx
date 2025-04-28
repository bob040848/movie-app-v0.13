'use client';

import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Movie } from '@/types/movie';
import Link from 'next/link';

type SearchBarProps = {
  onSearch: (query: string) => void;
  searchResults: Movie[];
};

export const SearchBar = ({ onSearch, searchResults }: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    setIsOpen(!!e.target.value);
  };

  return (
    <div className="relative">
      <Input
        placeholder="Search movies..."
        onChange={handleInputChange}
        className="w-64 bg-background/90"
        onFocus={() => setIsOpen(!!searchResults.length)}
      />
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuContent className="w-64 bg-background/95">
          {searchResults.map((movie) => (
            <DropdownMenuItem key={movie.id} asChild>
              <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
            </DropdownMenuItem>
          ))}
          {searchResults.length > 0 && (
            <DropdownMenuItem asChild>
              <Link href="/search">See more results</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};