# MyAnimeList Url to ID Parser/Converter

Convert your MyAnimeList URL to the respective's object ID. This can be usefull
when you're trying to parse MyAnimeList URl's to extract their ID.

Yes, we support TypeScript.

## Supported Url
 - Anime
 - Manga
 - Character (Both Manga and Anime)

## Usage

### Installation

```bash
npm i -s myanimelist-url-to-id

# OR

yarn add myanimelist-url-to-id
```

### Use them in your project

```ts
import { getCharaId } from 'myanimelist-url-to-id';

console.log(getCharaId('https://myanimelist.net/character/81239/Yuuma_Kuga'));
// 81239
```

## FAQ

**Do this library requires MAL API?** \
Short answer — No. We just parse your url and give you back the ID.


**Do I need to access MAL API to get the full information?** \
Yes.


**How can this be an FAQ when you wrote it before the package released?** \
[In this case, "FAQ" stands for "Fully Anticipated Questions"](https://www.youtube.com/watch?v=8YUWDrLazCg).

## License

[MIT](./LICENSE).