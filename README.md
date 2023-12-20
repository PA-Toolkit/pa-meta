<h1 align="center">Welcome to pa-meta 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/PA-Toolkit/pa-meta#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/PA-Toolkit/pa-meta/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/PA-Toolkit/pa-meta/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/PA-Toolkit/pa-meta" />
  </a>
</p>

> Creates and modifies Project Arrhythmia metadata.lsb files.

## 🏠 [Homepage](https://github.com/PA-Toolkit/pa-meta)

## Install

```sh
npm install pa-meta
```

## Usage

```js
import { Metadata, Artist, ... } from "pa-meta";
```

```js
const { Metadata, Artist, ... } = require("pa-meta");
```

### Creating

#### Creating Metadata

With default values:

```js
const metadata = new Metadata();
```

With specified values:

```js
const metadata = new Metadata({
  artist: new Artist({
    /* ... */
  }),
  /* ... */
});
```

#### Creating Artist

With default values:

```js
const artist = new Artist();
```

With specified values:

```js
const artist = new Artist({
  name: "Artist name",
  link: "artistLink",
  linkType: LinkType.SoundCloud,
});
```

#### Creating Creator

With default values:

```js
const creator = new Creator();
```

With specified values:

```js
const creator = new Creator({
  steamName: "Name",
  steamId: 471736531,
});
```

#### Creating Song

With default values:

```js
const song = new Song();
```

With specified values:

```js
const song = new Song({
  title: "Song title",
  difficulty: Difficulty.Easy,
  description: "Song description",
  bpm: 120,
  /* ... */
});
```

#### Creating Beatmap

With default values:

```js
const beatmap = new Beatmap();
```

With specified values:

```js
const beatmap = new Beatmap({
  dateEdited: new Date() /* OR */ Date.now();
  gameVersion: "20.4.4",
  workshopID: -1,
  /* ... */
});
```

### Working

NOTE: `toJson()` and `toString()` return serialized values that PA accepts (e.g. `steam_name` instead of `steamName`).

#### Working with Metadata

Setting values:

```js
metadata.artist = new Artist({ ... });
```

Getting values:

- As class instances

```js
metadata.artist; // [Artist]
```

- As JSON objects

```js
metadata.artist.toJson(); // { name: "Artist name", ... }
```

- As JSON strings

```js
metadata.artist.toString(); // "{ name: "Artist name", ... }"
```

#### Working with Artist

Setting values:

```js
artist.name = "Artist name";
artist.link = "artistLink";
artist.linkType = LinkType.SoundCloud;
```

Getting:

- Normal values

```js
artist.name; // "Artist name"
artist.link; // "artistLink"
artist.linkType; // 1
```

- JSON object

```js
artist.toJson(); // { name: "Artist name", ... }
```

- JSON string

```js
artist.toString(); // "{ name: "Artist name", ... }"
```

#### Working with Creator

Setting values:

```js
creator.steamName = "Name";
creator.steamId = 0;
```

Getting:

- Normal values

```js
creator.steamName; // "Name"
creator.steamId; // 0
```

- JSON object

```js
creator.toJson(); // { steam_name: "Name", ... }
```

- JSON string

```js
creator.toString(); // "{ steam_name: "Name", ... }"
```

#### Working with Song

Setting values:

```js
song.title = "Song title";
song.difficulty = Difficulty.Easy;
song.bpm = 120;
```

Getting:

- Normal values

```js
song.title; // "Song title"
song.difficulty; // 0
song.description; // "Song description"
song.bpm; // 120
song.previewStart; // 140
song.previewLength; // 60
```

- JSON object

```js
song.toJson(); // { title: "Song title", ... }
```

- JSON string

```js
song.toString(); // "{ title: "Song title", ... }"
```

#### Working with Beatmap

Setting values:

```js
beatmap.dateEdited = new Date() /* OR */ Date.now();
beatmap.versionNumber = 0;
beatmap.gameVersion = "20.4.4";
```

Getting:

- Normal values

```js
beatmap.dateEdited; // 2022-01-01T00:00:00.000Z
beatmap.versionNumber; // 0
beatmap.gameVersion; // "20.4.4"
beatmap.workshopID; // -1

beatmap.getDateString(); // "2022-01-01_00.00.00"
```

- JSON object

```js
beatmap.toJson(); // { date_edited: "2022-01-01_00.00.00", ... }
```

- JSON string

```js
beatmap.toString(); // "{ date_edited: "2022-01-01_00.00.00", ... }"
```

### Building the metadata

You can convert the metadata to a JSON string/object, then write it to a file.

```js
const fs = require("fs");

fs.writeFileSync("metadata.lsb", metadata.toString());
```

### Reading the metadata

You can read an existing metadata from the string/object.

```js
const { Metadata } = require("pa-meta");
const fs = require("fs");

const jsonString = fs.readFileSync("metadata.lsb", "utf8");
const json = JSON.parse(jsonString);
const metadata = new Metadata();
metadata.fromJson(json);
```

## Author

- Github: [@PA-Toolkit](https://github.com/PA-Toolkit)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/PA-Toolkit/pa-meta/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [PA Toolkit](https://github.com/PA-Toolkit).<br />
This project is [MIT](https://github.com/PA-Toolkit/pa-meta/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
