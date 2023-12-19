import { Serializable } from "pa-common";
import { Artist, ArtistParams } from "./artist";
import { Beatmap, BeatmapConstructor } from "./beatmap";
import { CreateBeatmap } from "./beatmap/Helpers";
import { Creator, CreatorParams } from "./creator";
import { MetadataConstructor } from "./MetadataConstructor";
import { CreateSong, Song, SongConstructor } from "./song";

/**
 * The metadata of the Project Arrhythmia level, the base of the library.
 */
export class Metadata implements Serializable {
  private _artist: Artist = new Artist();
  private _creator: Creator = new Creator();
  private _song: Song = CreateSong();
  private _beatmap: Beatmap = CreateBeatmap();

  /**
   * The song's artist.
   */
  public get artist(): Artist {
    return this._artist;
  }

  public set artist(value: Artist | ArtistParams) {
    this._artist.fromJson(value);
  }

  /**
   * The creator of the level.
   */
  public get creator(): Creator {
    return this._creator;
  }

  public set creator(value: Creator | CreatorParams) {
    this._creator.fromJson(value);
  }

  /**
   * The song of the level, which also contains most of the information about the level itself.
   */
  public get song(): Song {
    return this._song;
  }

  public set song(value: Song | SongConstructor) {
    this._song.fromJson(value);
  }

  /**
   * The level's beatmap data.
   */
  public get beatmap(): Beatmap {
    return this._beatmap;
  }

  public set beatmap(value: Beatmap | BeatmapConstructor) {
    this._beatmap.fromJson(value);
  }

  fromJson(json: MetadataConstructor) {
    if (json.artist) {
      this._artist.fromJson(json.artist);
    }
    if (json.creator) {
      this._creator.fromJson(json.creator);
    }
    if (json.song) {
      this._song.fromJson(json.song);
    }
    if (json.beatmap) {
      this._beatmap.fromJson(json.beatmap);
    }
  }

  toJson(): MetadataConstructor {
    const json = {} as MetadataConstructor;
    if (this.artist) {
      json.artist = this._artist.toJson();
    }
    if (this.creator) {
      json.creator = this._creator.toJson();
    }
    if (this.song) {
      json.song = this._song.toJson();
    }
    if (this.beatmap) {
      json.beatmap = this._beatmap.toJson();
    }
    return json;
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(json: MetadataConstructor) {
    this.fromJson(json);
  }
}
