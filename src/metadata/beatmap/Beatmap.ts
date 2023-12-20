import { Serializable } from "pa-common";
import { BeatmapParams } from "./BeatmapParams";
import { BeatmapUtils } from "./Utils";

/**
 * The level's beatmap data.
 */
export class Beatmap implements Serializable {
  /**
   * The date the beatmap was last edited.
   */
  dateEdited: Date = new Date(Date.now());

  /**
   * The version number of the beatmap. This increments every time the level is updated to the Workshop.
   */
  versionNumber = 0;

  /**
   * The game version where the beatmap was edited.
   */
  gameVersion = "20.4.4";

  /**
   * The Steam Workshop ID of the beatmap. This is assigned on level upload and is equal to -1 if the level was not yet uploaded.
   */
  workshopID = -1;

  constructor(params?: BeatmapParams) {
    if (params) {
      this.fromJson({
        date_edited: params.dateEdited
          ? BeatmapUtils.dateToString(params.dateEdited)
          : undefined,
        version_number: params.versionNumber?.toString(),
        game_version: params.gameVersion,
        workshop_id: params.workshopID?.toString(),
      });
    }
  }

  /**
   * Returns a date string that is compatible with Project Arrhythmia. Depends on `dateEdited`.
   * @returns The date string.
   */
  getDateString(): string {
    return BeatmapUtils.dateToString(this.dateEdited);
  }

  fromJson(json: any) {
    if (json.date_edited !== undefined) {
      this.dateEdited = BeatmapUtils.parseDateString(json.date_edited);
    }

    if (json.version_number !== undefined) {
      this.versionNumber = parseInt(json.version_number);
    }

    if (json.game_version !== undefined) {
      this.gameVersion = json.game_version;
    }

    if (json.workshop_id !== undefined) {
      this.workshopID = parseInt(json.workshop_id);
    }
  }

  toJson(): any {
    return {
      date_edited: this.getDateString(),
      version_number: this.versionNumber?.toString(),
      game_version: this.gameVersion,
      workshop_id: this.workshopID?.toString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}
