import { Difficulty } from "./Enums";

/**
 * A Song constructor object.
 */
export interface SongConstructor {
  /**
   * The song/level's title.
   */
  title?: string;

  /**
   * The level's difficulty.
   */
  difficulty?: Difficulty | string;

  /**
   * The level's description.
   */
  description?: string;

  /**
   * The song's BPM.
   */
  bpm?: number | string;

  /**
   * @deprecated This was never implemented in the game.
   */
  time?: number | string;

  /**
   * @deprecated This was never implemented in the game.
   */
  t?: number | string;

  /**
   * The start time of the Arcade song preview.
   */
  previewStart?: number | string;

  /**
   * The start time of the Arcade song preview.
   */
  preview_start?: number | string;

  /**
   * The length of the Arcade song preview.
   */
  previewLength?: number | string;

  /**
   * The length of the Arcade song preview.
   */
  preview_length?: number | string;
}
