import { Serializable } from "pa-common";
import { Artist, CreateArtist } from "./artist";
import { Beatmap } from "./beatmap";
import { CreateBeatmap } from "./beatmap/Helpers";
import { CreateCreator, Creator } from "./creator";
import { MetadataConstructor } from "./MetadataConstructor";
import { CreateSong, Song } from "./song";

/**
 * The metadata of the Project Arrhythmia level, the base of the library.
 */
export class Metadata implements Serializable {
  private _artist: Artist = CreateArtist();
  private _creator: Creator = CreateCreator();
  private _song: Song = CreateSong();
  private _beatmap: Beatmap = CreateBeatmap();

  /**
   * The song's artist.
   */
  public get artist(): Artist {
    return this._artist;
  }

  public set artist(value: Artist) {
    this._artist = value;
  }

  /**
   * The creator of the level.
   */
  public get creator(): Creator {
    return this._creator;
  }

  public set creator(value: Creator) {
    this._creator = value;
  }

  /**
   * The song of the level, which also contains most of the information about the level itself.
   */
  public get song(): Song {
    return this._song;
  }

  public set song(value: Song) {
    this._song = value;
  }

  /**
   * The level's beatmap data.
   */
  public get beatmap(): Beatmap {
    return this._beatmap;
  }

  public set beatmap(value: Beatmap) {
    this._beatmap = value;
  }

  fromJson(json: MetadataConstructor) {
    if (json.artist) {
      this.artist.fromJson(json.artist);
    }
    if (json.creator) {
      this.creator.fromJson(json.creator);
    }
    if (json.song) {
      this.song.fromJson(json.song);
    }
    if (json.beatmap) {
      this.beatmap.fromJson(json.beatmap);
    }
  }

  toJson(): MetadataConstructor {
    const json = {} as MetadataConstructor;
    if (this.artist) {
      json.artist = this.artist.toJson();
    }
    if (this.creator) {
      json.creator = this.creator.toJson();
    }
    if (this.song) {
      json.song = this.song.toJson();
    }
    if (this.beatmap) {
      json.beatmap = this.beatmap.toJson();
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
