import { Beatmap } from "./Beatmap";
import { BeatmapConstructor } from "./BeatmapConstructor";

/**
 * Constructs a new Beatmap.
 * @returns A new Beatmap.
 */
export function CreateBeatmap();
/**
 * Constructs a new Beatmap.
 * @param constructor A Beatmap constructor object.
 * @returns A new Beatmap.
 */
export function CreateBeatmap(constructor: BeatmapConstructor);
export function CreateBeatmap(constructor?: BeatmapConstructor): Beatmap {
  return new Beatmap(constructor || {});
}
