import { Serializable } from "pa-common";
import { Difficulty } from "./Enums";
import { DifficultyParseError } from "./Errors";
import { SongParams } from "./SongParams";

/**
 * The song of the level, which also contains most of the information about the level itself.
 */
export class Song implements Serializable {
  /**
   * The song/level's title.
   */
  title = "Level";

  /**
   * The level's difficulty.
   */
  difficulty: Difficulty = Difficulty.Hard;

  /**
   * The level's description.
   */
  description = "This is the default description!";

  /**
   * The BPM of the song.
   */
  bpm = 140;

  /**
   * @deprecated This was never implemented in the game.
   */
  time = 60;

  /**
   * The start time of the Arcade song preview.
   */
  previewStart = 140;

  /**
   * The length of the Arcade song preview.
   */
  previewLength = 60;

  constructor(params?: SongParams) {
    if (params) {
      this.fromJson({
        title: params.title,
        difficulty: params.difficulty?.toString(),
        description: params.description,
        bpm: params.bpm?.toString(),
        t: params.time?.toString(),
        preview_start: params.previewStart?.toString(),
        preview_length: params.previewLength?.toString(),
      });
    }
  }

  fromJson(json: any) {
    if (json.title !== undefined) {
      this.title = json.title;
    }

    if (json.difficulty !== undefined) {
      const difficulty = parseInt(json.difficulty);
      if (!(difficulty in Difficulty)) {
        throw new DifficultyParseError(`Invalid difficulty: ${difficulty}`);
      }
      this.difficulty = difficulty;
    }
    if (json.description !== undefined) {
      this.description = json.description;
    }
    if (json.bpm !== undefined) {
      this.bpm = parseInt(json.bpm);
    }
    if (json.time !== undefined) {
      this.time = parseInt(json.time);
    }
    if (json.previewStart !== undefined) {
      this.previewStart = parseInt(json.previewStart);
    }
    if (json.previewLength !== undefined) {
      this.previewLength = parseInt(json.previewLength);
    }
  }

  toJson(): any {
    return {
      title: this.title,
      difficulty: this.difficulty?.toString(),
      description: this.description,
      bpm: this.bpm?.toString(),
      t: this.time?.toString(),
      preview_start: this.previewStart?.toString(),
      preview_length: this.previewLength?.toString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}
