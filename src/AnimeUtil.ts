import InvalidUrl from './exceptions/InvalidUrl';
import { URL } from 'url';
import { MAL_BaseUrl } from './ConstDefinition';
import { startsWith } from './utils';

const animePattern = /\/anime\/([\d]+)/;

/**
 * Get Charater ID from given MAL Anime URL.
 * @param url URL string of MyAnimeList Anime URL
 */
export function getAnimeId(url: string): number {
  if (!startsWith(MAL_BaseUrl, url) || !animePattern.test(url)) {
    throw new InvalidUrl("The url doesn't match the Anime Pattern.");
  }

  let result = animePattern.exec(url);
  return parseInt(result![1]);
}

/**
 * Get MAL Anime URL (not canonical) from given ID.
 * @param id Anime ID
 */
export function getAnimeUrl(id: number): string {
  let url = new URL('/anime/' + id, MAL_BaseUrl);
  return url.toString();
}
