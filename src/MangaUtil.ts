import InvalidUrl from './exceptions/InvalidUrl';
import { URL } from 'url';
import { MAL_BaseUrl } from './ConstDefinition';
import { startsWith } from './utils';

const mangaPattern = /\/manga\/([\d]+)/;

/**
 * Get Charater ID from given MAL Manga URL.
 * @param url URL string of MyAnimeList Manga URL
 */
export function getMangaId(url: string): number {
  if (!startsWith(MAL_BaseUrl, url) || !mangaPattern.test(url)) {
    throw new InvalidUrl("The url doesn't match the Manga Pattern.");
  }

  let result = mangaPattern.exec(url);
  return parseInt(result![1]);
}

/**
 * Get MAL Manga URL (not canonical) from given ID.
 * @param id Manga ID
 */
export function getMangaUrl(id: number): string {
  let url = new URL('/manga/' + id, MAL_BaseUrl);
  return url.toString();
}
