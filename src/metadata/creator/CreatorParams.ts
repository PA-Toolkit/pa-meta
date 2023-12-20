/**
 * A Creator constructor object.
 */
export interface CreatorParams {
  /**
   * The creator's Steam name.
   */
  steamName?: string;

  /**
   * The creator's SteamID3. It's assigned in the Project Arrhythmia editor.
   */
  steamId?: number | string;
}
