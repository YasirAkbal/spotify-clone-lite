import { http, HttpResponse } from 'msw';

// Picsum Photos - Open source, free image service
// Using seed for consistent images per genre
const getImageUrl = (seed: string) => `https://picsum.photos/seed/${seed}/300/300`;

const genres = [
  { id: 'pop', name: 'Pop', color: '#8D67AB' },
  { id: 'hip-hop', name: 'Hip Hop', color: '#BA5D07' },
  { id: 'rock', name: 'Rock', color: '#E61E32' },
  { id: 'latin', name: 'Latin', color: '#E13300' },
  { id: 'mood', name: 'Mood', color: '#8D67AB' },
  { id: 'indie', name: 'Indie', color: '#608108' },
  { id: 'workout', name: 'Workout', color: '#777777' },
  { id: 'discover', name: 'Discover', color: '#8D67AB' },
  { id: 'country', name: 'Country', color: '#BA5D07' },
  { id: 'r-n-b', name: 'R&B', color: '#DC148C' },
  { id: 'k-pop', name: 'K-Pop', color: '#0D73EC' },
  { id: 'chill', name: 'Chill', color: '#503750' },
  { id: 'sleep', name: 'Sleep', color: '#1E3264' },
  { id: 'party', name: 'Party', color: '#AF2896' },
  { id: 'decades', name: 'Decades', color: '#E91429' },
  { id: 'love', name: 'Love', color: '#E13300' },
  { id: 'metal', name: 'Metal', color: '#1E3264' },
  { id: 'jazz', name: 'Jazz', color: '#477D95' },
  { id: 'classical', name: 'Classical', color: '#7D4B32' },
  { id: 'focus', name: 'Focus', color: '#503750' },
  { id: 'soul', name: 'Soul', color: '#BC5900' },
  { id: 'blues', name: 'Blues', color: '#0D73EC' },
  { id: 'punk', name: 'Punk', color: '#E61E32' },
  { id: 'ambient', name: 'Ambient', color: '#1E3264' },
  { id: 'electronic', name: 'Electronic', color: '#0D73EC' },
  { id: 'dance-edm', name: 'Dance/EDM', color: '#AF2896' },
  { id: 'reggae', name: 'Reggae', color: '#148A08' },
  { id: 'folk', name: 'Folk & Acoustic', color: '#BA5D07' },
  { id: 'gaming', name: 'Gaming', color: '#E61E32' },
  { id: 'anime', name: 'Anime', color: '#E13300' },
];

const genresWithImages = genres.map((genre) => ({
  ...genre,
  image: {
    url: getImageUrl(genre.id),
    alt: `${genre.name} genre cover`,
  },
}));

export const genreHandlers = [
  http.get('/api/genres', async ({ request }) => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '30');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate network delay

    const paginatedGenres = genresWithImages.slice(offset, offset + limit);

    return HttpResponse.json({
      genres: paginatedGenres,
      total: genresWithImages.length,
    });
  }),

  http.get('/api/genres/:genreId', async ({ params }) => {
    const { genreId } = params;

    await new Promise((resolve) => setTimeout(resolve, 200));

    const genre = genresWithImages.find((g) => g.id === genreId);

    if (!genre) {
      return HttpResponse.json({ message: 'Genre not found' }, { status: 404 });
    }

    return HttpResponse.json(genre);
  }),
];
