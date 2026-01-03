# MyAnimeList Url to ID Parser/Converter

**Note:** This project has moved to
[GitLab](https://gitlab.com/chez14/node-myanimelist-url-to-id). The repository
on GitHub is kept for archival and mirror purposes.

Convert your MyAnimeList URL to the respective's object ID. This can be useful
when you're trying to parse MyAnimeList URLs to extract their ID.

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

## Documentation

You can actually see the usage of this library on the [`__test__`folder](src/__test__/), and go with the documentation that I made on the functions comment (that shows up on Intellisense). But for clarity I'll write it here too.

### `AnimeUtil` Class

#### `getAnimeId (url: string): number`

Will returns something like `34599`

#### `getAnimeUrl (id: number): string` 

Will return something like `https://myanimelist.net/anime/34599`

### `CharaUtil` Class

**Note**: Chara stands for Character.

#### `getCharaId(url: string): number`

Will return something like `140046`

#### `getCharaUrl(id: number): string`

Will return something like `https://myanimelist.net/character/140046`

### `MangaUtil` Class

#### `getMangaId(url: string): number`

Will return something like  `91941`

#### `getMangaUrl(id: number): string`

Will return something like `https://myanimelist.net/manga/91941`

### `InvalidUrl` Exception

the `getAnimeId`, `getCharaId` and `getMangaId` will throws `InvalidUrl` exception when the Url doesn't match the pattern we have. Please handle it properly.

```js
import {InvalidUrl} from "myanimelist-url-to-id/build/exceptions"
try {
	let animeId = getAnimeId('malformed-url'); 
} catch (e) {
    if(e instanceof InvalidUrl) {
        // handle your error here.
    }
}
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
