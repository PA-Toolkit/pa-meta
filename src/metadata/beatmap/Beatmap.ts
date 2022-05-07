import { Serializable } from "pa-common";
import { BeatmapConstructor } from "./BeatmapConstructor";
import { BeatmapParseError } from "./Errors";
import { BeatmapUtils } from "./Utils";

/**
 * The level's beatmap data.
 */
export class Beatmap implements Serializable {
  private _dateEdited: Date = new Date(Date.now());
  private _versionNumber = 0;
  private _gameVersion = "20.4.4";
  private _workshopID = -1;

  /**
   * The date the beatmap was last edited.
   */
  public get dateEdited(): Date {
    return this._dateEdited;
  }

  public set dateEdited(value: Date | string) {
    this._dateEdited =
      typeof value === "string" ? BeatmapUtils.parseDateString(value) : value;
  }

  /**
   * The version number of the beatmap. This increments every time the level is updated to the Workshop.
   */
  public get versionNumber(): number {
    return this._versionNumber;
  }

  public set versionNumber(value: number) {
    this._versionNumber = value;
  }

  /**
   * The game version where the beatmap was edited.
   */
  public get gameVersion(): string {
    return this._gameVersion;
  }

  public set gameVersion(value: string) {
    this._gameVersion = value;
  }

  /**
   * The Steam Workshop ID of the beatmap. This is assigned on level upload and is equal to -1 if the level was not yet uploaded.
   */
  public get workshopID(): number {
    return this._workshopID;
  }

  public set workshopID(value: number) {
    this._workshopID = value;
  }

  /**
   * Returns a date string that is compatible with Project Arrhythmia. Depends on `dateEdited`.
   * @returns The date string.
   */
  public dateString(): string {
    return BeatmapUtils.dateToString(this.dateEdited);
  }

  fromJson(json: BeatmapConstructor) {
    if (json.dateEdited !== undefined && json.date_edited !== undefined) {
      throw new BeatmapParseError(
        `The object has both dateEdited and date_edited fields: ${json.dateEdited}, ${json.date_edited}`
      );
    }
    if (json.dateEdited !== undefined) {
      this.dateEdited =
        typeof json.dateEdited === "string"
          ? BeatmapUtils.parseDateString(json.dateEdited)
          : new Date(json.dateEdited);
    }
    if (json.date_edited !== undefined) {
      this.dateEdited =
        typeof json.date_edited === "string"
          ? BeatmapUtils.parseDateString(json.date_edited)
          : new Date(json.date_edited);
    }

    if (json.versionNumber !== undefined && json.version_number !== undefined) {
      throw new BeatmapParseError(
        `The object has both versionNumber and version_number fields: ${json.versionNumber}, ${json.version_number}`
      );
    }
    if (json.versionNumber !== undefined) {
      this.versionNumber =
        typeof json.versionNumber === "string"
          ? parseInt(json.versionNumber)
          : json.versionNumber;
    }
    if (json.version_number !== undefined) {
      this.versionNumber =
        typeof json.version_number === "string"
          ? parseInt(json.version_number)
          : json.version_number;
    }

    if (json.gameVersion !== undefined && json.game_version !== undefined) {
      throw new BeatmapParseError(
        `The object has both gameVersion and game_version fields: ${json.gameVersion}, ${json.game_version}`
      );
    }
    if (json.gameVersion !== undefined) {
      this.gameVersion = json.gameVersion;
    }
    if (json.game_version !== undefined) {
      this.gameVersion = json.game_version;
    }

    if (json.workshopID !== undefined && json.workshop_id !== undefined) {
      throw new BeatmapParseError(
        `The object has both workshopID and workshop_id fields: ${json.workshopID}, ${json.workshop_id}`
      );
    }
    if (json.workshopID !== undefined) {
      this.workshopID =
        typeof json.workshopID === "string"
          ? parseInt(json.workshopID)
          : json.workshopID;
    }
    if (json.workshop_id !== undefined) {
      this.workshopID =
        typeof json.workshop_id === "string"
          ? parseInt(json.workshop_id)
          : json.workshop_id;
    }
  }

  toJson(): BeatmapConstructor {
    const json: BeatmapConstructor = {};
    if (this.dateEdited !== undefined) {
      json.date_edited = this.dateString();
    }
    if (this.versionNumber !== undefined) {
      json.version_number = this.versionNumber.toString();
    }
    if (this.gameVersion !== undefined) {
      json.game_version = this.gameVersion;
    }
    if (this.workshopID !== undefined) {
      json.workshop_id = this.workshopID.toString();
    }
    return json;
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(json: BeatmapConstructor) {
    this.fromJson(json);
  }
}
