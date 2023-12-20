import { Difficulty } from "./Enums";

/**
 * A Song constructor object.
 */
export interface SongParams {
  /**
   * The song/level's title.
   */
  title?: string;

  /**
   * The level's difficulty.
   */
  difficulty?: Difficulty;

  /**
   * The level's description.
   */
  description?: string;

  /**
   * The song's BPM.
   */
  bpm?: number;

  /**
   * @deprecated This was never implemented in the game.
   */
  time?: number;

  /**
   * The start time of the Arcade song preview.
   */
  previewStart?: number;

  /**
   * The length of the Arcade song preview.
   */
  previewLength?: number;
}
