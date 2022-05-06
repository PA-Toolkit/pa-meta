/**
 * A Beatmap constructor object.
 */
export interface BeatmapConstructor {
  /**
   * The date the beatmap was last edited.
   */
  dateEdited?: number | string | Date;
  /**
   * The date the beatmap was last edited.
   */
  date_edited?: number | string | Date;
  /**
   * The version number of the beatmap. This increments every time the level is updated to the Workshop.
   */
  versionNumber?: number | string;
  /**
   * The version number of the beatmap. This increments every time the level is updated to the Workshop.
   */
  version_number?: number | string;
  /**
   * The game version where the beatmap was edited.
   */
  gameVersion?: string;
  /**
   * The game version where the beatmap was edited.
   */
  game_version?: string;
  /**
   * The Steam Workshop ID of the beatmap. This is assigned on level upload and is equal to -1 if the level was not yet uploaded.
   */
  workshopID?: number | string;
  /**
   * The Steam Workshop ID of the beatmap. This is assigned on level upload and is equal to -1 if the level was not yet uploaded.
   */
  workshop_id?: number | string;
}
