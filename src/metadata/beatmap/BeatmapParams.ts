/**
 * A Beatmap constructor object.
 */
export interface BeatmapParams {
  /**
   * The date the beatmap was last edited.
   */
  dateEdited?: Date;

  /**
   * The version number of the beatmap. This increments every time the level is updated in the Workshop.
   */
  versionNumber?: number;

  /**
   * The game version where the beatmap was edited.
   */
  gameVersion?: string;

  /**
   * The Steam Workshop ID of the beatmap. This is assigned on level upload and is equal to -1 if the level was not yet uploaded.
   */
  workshopID?: number;
}
