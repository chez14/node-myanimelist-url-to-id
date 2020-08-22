import InvalidUrl from '../exceptions/InvalidUrl';
import { getMangaId, getMangaUrl } from '../MangaUtil';

describe('Should be able to parse Anime Url', () => {
  test('Normal Url ', () => {
    expect(getMangaId('https://myanimelist.net/manga/91941/Made_in_Abyss')).toBe(91941);
    expect(getMangaId('https://myanimelist.net/manga/105084')).toBe(105084);
  });

  test('Able to detect anomaly Url', () => {
    // Wrong base URL
    expect(() => getMangaId('https://myanimlist.net/manga/25/Fullmetal_Alchemist')).toThrow(InvalidUrl);

    // Wrong Path
    expect(() => getMangaId('https://myanimelist.net/mangga/48151/World_Trigger')).toThrow(InvalidUrl);
    expect(() => getMangaId('https://myanimelist.net/mangga/48151')).toThrow(InvalidUrl);
  });
});

describe('should be able to generate Anime Url', () => {
  test('with given ID', () => {
    expect(getMangaUrl(75989)).toBe('https://myanimelist.net/manga/75989');
  });
});
