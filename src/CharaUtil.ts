import InvalidUrl from './exceptions/InvalidUrl';
import { URL } from 'url';
import { MAL_BaseUrl } from './ConstDefinition';
import { startsWith } from './utils';

const charaPattern = /\/character\/([\d]+)/;

/**
 * Get Charater ID from given MAL Character URL.
 * @param url URL string of MyAnimeList Character URL
 */
export function getCharaId(url: string): number {
  if (!startsWith(MAL_BaseUrl, url) || !charaPattern.test(url)) {
    throw new InvalidUrl("The url doesn't match the Character Pattern.");
  }

  let result = charaPattern.exec(url);
  return parseInt(result![1]);
}

/**
 * Get MAL Character URL (not canonical) from given ID.
 * @param id Character ID
 */
export function getCharaUrl(id: number): string {
  let url = new URL('/character/' + id, MAL_BaseUrl);
  return url.toString();
}
