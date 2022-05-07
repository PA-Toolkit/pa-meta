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
import { CreateMetadata, CreateArtist, ... } from "pa-meta";
```

```js
const { CreateMetadata, CreateArtist, ... } = require("pa-meta");
```

### Creating

#### Creating Metadata

With default values:

```js
const metadata = CreateMetadata();
```

With specified values:

```js
const metadata = CreateMetadata({

  // Using helper functions with constructor objects
  artist: CreateArtist({ ... }),

  // Using constructor objects directly
  song: { ... },

  ...
});
```

#### Creating Artist

With default values:

```js
const artist = CreateArtist();
```

With specified values:

```js
const artist = CreateArtist({
  name: "Artist name",
  link: "artistLink",
  linkType: LinkType.SoundCloud /* OR */ 1 /* OR */ "1",
});
```

#### Creating Creator

With default values:

```js
const creator = CreateCreator();
```

With specified values:

```js
const creator = CreateCreator({
  steamName: "Name",
  // OR
  steam_name: "Name",

  steamId: 0 /* OR */ "0",
  // OR
  steam_id: 0 /* OR */ "0",
});
```

NOTE: You can only use either normal or serialized name for a certain field (e.g. either `steamName` or `steam_name`) in a single constructor object.

#### Creating Song

With default values:

```js
const song = CreateSong();
```

With specified values:

```js
const song = CreateSong({
  title: "Song title",
  difficulty: Difficulty.Easy /* OR */ 0 /* OR */ "0",
  description: "Song description",
  bpm: 120 /* OR */ "120",

  previewStart: 140 /* OR */ "140",
  // OR
  preview_start: 140 /* OR */ "140",

  previewLength: 60 /* OR */ "60",
  // OR
  preview_length: 60 /* OR */ "60",
});
```

NOTE: You can only use either normal or serialized name for a certain field (e.g. either `previewStart` or `preview_start`) in a single constructor object.

#### Creating Beatmap

With default values:

```js
const beatmap = CreateBeatmap();
```

With specified values:

```js
const beatmap = CreateBeatmap({
  dateEdited: "2022-01-01_00.00.00" /* OR */ new Date() /* OR */ Date.now();
  // OR
  date_edited: "2022-01-01_00.00.00" /* OR */ new Date() /* OR */ Date.now();

  versionNumber: 0 /* OR */ "0",
  // OR
  version_number: 0 /* OR */ "0",

  gameVersion: "20.4.4",
  // OR
  game_version: "20.4.4",

  workshopID: -1 /* OR */ "-1",
  // OR
  workshop_id: -1 /* OR */ "-1",
});
```

NOTE: You can only use either normal or serialized name for a certain field (e.g. either `dateEdited` or `date_edited`) in a single constructor object.

### Working

#### Working with Metadata

Setting values:

```js
// Using helper functions with constructor objects
metadata.artist = CreateArtist({ ... });

// Using constructor objects directly
metadata.song = { ... };
```

Getting values:

- As Artist, Creator etc. instances

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
artist.linkType = LinkType.SoundCloud /* OR */ 1 /* OR */ "1";
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
creator.steamId = 0 /* OR */ "0";
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

NOTE: `toJson()` and `toString()` return serialized values (e.g. `steam_name` instead of `steamName`).

#### Working with Song

Setting values:

```js
song.title = "Song title";
song.difficulty = Difficulty.Easy /* OR */ 0 /* OR */ "0";
song.description = "Song description";
song.bpm = 120 /* OR */ "120";
song.previewStart = 140 /* OR */ "140";
song.previewLength = 60 /* OR */ "60";
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

NOTE: `toJson()` and `toString()` return serialized values (e.g. `preview_start` instead of `previewStart`).

#### Working with Beatmap

Setting values:

```js
beatmap.dateEdited = "2022-01-01_00.00.00" /* OR */ new Date() /* OR */ Date.now();
beatmap.versionNumber = 0 /* OR */ "0";
beatmap.gameVersion = "20.4.4";
beatmap.workshopID = -1 /* OR */ "-1";
```

Getting:

- Normal values

```js
beatmap.dateEdited; // 2022-01-01T00:00:00.000Z
beatmap.versionNumber; // 0
beatmap.gameVersion; // "20.4.4"
beatmap.workshopID; // -1

beatmap.dateString(); // "2022-01-01_00.00.00"
```

- JSON object

```js
beatmap.toJson(); // { date_edited: "2022-01-01_00.00.00", ... }
```

- JSON string

```js
beatmap.toString(); // "{ date_edited: "2022-01-01_00.00.00", ... }"
```

NOTE: `toJson()` and `toString()` return serialized values (e.g. `date_edited` instead of `dateEdited`).

### Building the metadata

You can convert the metadata to a JSON string/object, then write it to a file.

```js
const fs = require("fs");

fs.writeFileSync("metadata.lsb", metadata.toString());
```

### Reading the metadata

You can read an existing metadata from the string/object.

```js
const { CreateMetadata } = require("pa-meta");
const fs = require("fs");

const jsonString = fs.readFileSync("metadata.lsb", "utf8");
const json = JSON.parse(jsonString);
const metadata = CreateMetadata(json);
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/PA-Toolkit/pa-meta/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [PA Toolkit](https://github.com/PA-Toolkit).<br />
This project is [MIT](https://github.com/PA-Toolkit/pa-meta/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
