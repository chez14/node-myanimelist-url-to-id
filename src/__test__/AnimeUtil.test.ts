import { getAnimeId, getAnimeUrl } from "../AnimeUtil";
import InvalidUrl from "../exceptions/InvalidUrl";

describe('Should be able to parse Anime Url', () => {
  test('Normal Url ', () => {
    expect(getAnimeId('https://myanimelist.net/anime/24405/World_Trigger')).toBe(24405);
    expect(getAnimeId('https://myanimelist.net/anime/6746')).toBe(6746);
  })

  test('Able to detect anomaly Url', () => {
    // Wrong base URL
    expect(() => getAnimeId('https://myanimlist.net/anime/24405/World_Trigger')).toThrow(InvalidUrl);

    // Wrong Path
    expect(() => getAnimeId('https://myanimelist.net/anim/24405/World_Trigger')).toThrow(InvalidUrl);
    expect(() => getAnimeId('https://myanimelist.net/anim/6746')).toThrow(InvalidUrl);
  })
})

describe('should be able to generate Anime Url', () => {
  test('with given ID', () => {
    expect(getAnimeUrl(24405)).toBe('https://myanimelist.net/anime/24405')
  })
})
