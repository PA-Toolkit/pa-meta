import { Serializable } from "pa-common";
import { Difficulty } from "./Enums";
import { DifficultyParseError, SongParseError } from "./Errors";
import { SongConstructor } from "./SongConstructor";

/**
 * The song of the level, which also contains most of the information about the level itself.
 */
export class Song implements Serializable {
  private _title = "Level";
  private _difficulty: Difficulty = 2;
  private _description = "This is the default description!";
  private _bpm = 140;
  private _time = 60;
  private _previewStart = 140;
  private _previewLength = 60;

  /**
   * The song/level's title.
   */
  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  /**
   * The level's difficulty.
   */
  public get difficulty(): Difficulty {
    return this._difficulty;
  }

  public set difficulty(value: Difficulty) {
    if (!(value in Difficulty)) {
      throw new DifficultyParseError(`Invalid difficulty: ${value}`);
    }
    this._difficulty = value;
  }

  /**
   * The level's description.
   */
  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  /**
   * The BPM of the song.
   */
  public get bpm(): number {
    return this._bpm;
  }

  public set bpm(value: number) {
    this._bpm = value;
  }

  /**
   * @deprecated This was never implemented in the game.
   */
  public get time(): number {
    return this._time;
  }

  public set time(value: number) {
    this._time = value;
  }

  /**
   * The start time of the Arcade song preview.
   */
  public get previewStart(): number {
    return this._previewStart;
  }

  public set previewStart(value: number) {
    this._previewStart = value;
  }

  /**
   * The length of the Arcade song preview.
   */
  public get previewLength(): number {
    return this._previewLength;
  }

  public set previewLength(value: number) {
    this._previewLength = value;
  }

  fromJson(json: SongConstructor) {
    if (json.title !== undefined) {
      this.title = json.title;
    }

    if (json.difficulty !== undefined) {
      this.difficulty =
        typeof json.difficulty === "string"
          ? parseInt(json.difficulty)
          : json.difficulty;
    }

    if (json.description !== undefined) {
      this.description = json.description;
    }

    if (json.bpm !== undefined) {
      this.bpm = typeof json.bpm === "string" ? parseInt(json.bpm) : json.bpm;
    }

    if (json.time !== undefined) {
      this.time =
        typeof json.time === "string" ? parseInt(json.time) : json.time;
    }

    if (json.previewStart !== undefined && json.preview_start === undefined) {
      return new SongParseError(
        `The object has both previewStart and preview_start fields: ${json.previewStart}, ${json.preview_start}`
      );
    }
    if (json.previewStart !== undefined) {
      this.previewStart =
        typeof json.previewStart === "string"
          ? parseInt(json.previewStart)
          : json.previewStart;
    }
    if (json.preview_start !== undefined) {
      this.previewStart =
        typeof json.preview_start === "string"
          ? parseInt(json.preview_start)
          : json.preview_start;
    }

    if (json.previewLength !== undefined && json.preview_length === undefined) {
      return new SongParseError(
        `The object has both previewLength and preview_length fields: ${json.previewLength}, ${json.preview_length}`
      );
    }
    if (json.previewLength !== undefined) {
      this.previewLength =
        typeof json.previewLength === "string"
          ? parseInt(json.previewLength)
          : json.previewLength;
    }
    if (json.preview_length !== undefined) {
      this.previewLength =
        typeof json.preview_length === "string"
          ? parseInt(json.preview_length)
          : json.preview_length;
    }
  }

  toJson(): SongConstructor {
    const json = {} as SongConstructor;
    if (this.title !== undefined) {
      json.title = this.title;
    }
    if (this.difficulty !== undefined) {
      json.difficulty = this.difficulty.toString();
    }
    if (this.description !== undefined) {
      json.description = this.description;
    }
    if (this.bpm !== undefined) {
      json.bpm = this.bpm.toString();
    }
    if (this.time !== undefined) {
      json.t = this.time.toString();
    }
    if (this.previewStart !== undefined) {
      json.preview_start = this.previewStart.toString();
    }
    if (this.previewLength !== undefined) {
      json.preview_length = this.previewLength.toString();
    }
    return json;
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(json: SongConstructor) {
    this.fromJson(json);
  }
}
