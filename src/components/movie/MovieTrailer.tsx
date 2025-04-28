'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Video } from '@/types/movie';

type MovieTrailerProps = {
  trailer: Video | null;
};

export const MovieTrailer = ({ trailer }: MovieTrailerProps) => {
  const [open, setOpen] = useState(false);

  if (!trailer || trailer.site !== 'YouTube') return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Trailer"
          allowFullScreen
          className="border-0"
        />
      </DialogContent>
    </Dialog>
  );
};