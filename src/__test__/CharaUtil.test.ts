import InvalidUrl from '../exceptions/InvalidUrl';
import { getCharaId, getCharaUrl } from '../CharaUtil';

describe('Should be able to parse Character Url', () => {
  test('Normal Url ', () => {
    expect(getCharaId('https://myanimelist.net/character/81239/Yuuma_Kuga')).toBe(81239);
    expect(getCharaId('https://myanimelist.net/character/27/Killua_Zoldyck')).toBe(27);
    expect(getCharaId('https://myanimelist.net/character/30')).toBe(30);
  });

  test('Able to detect anomaly Url', () => {
    // Wrong base URL
    expect(() => getCharaId('https://myanimlist.net/character/144919/Ray')).toThrow(InvalidUrl);

    // Wrong Path
    expect(() => getCharaId('https://myanimelist.net/chara/24592')).toThrow(InvalidUrl);
    expect(() => getCharaId('https://myanimelist.net/chara/150888/Phil')).toThrow(InvalidUrl);
  });
});

describe('should be able to generate Character Url', () => {
  test('with given ID', () => {
    expect(getCharaUrl(12)).toBe('https://myanimelist.net/character/12');
  });
});
