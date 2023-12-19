import { Serializable } from "pa-common";
import { CreatorParams } from "./CreatorParams";

/**
 * The creator of the level.
 */
export class Creator implements Serializable {
  /**
   * The creator's Steam name.
   */
  steamName = "Vitamin Games";

  /**
   * The creator's SteamID3. It's assigned in the Project Arrhythmia Editor while uploading the level.
   */
  steamId: number;

  constructor(params?: CreatorParams) {
    if (params) {
      this.fromJson({
        steam_name: params.steamName,
        steam_id: params.steamId.toString(),
      });
    }
  }

  fromJson(json: any) {
    if (json.steam_name !== undefined) {
      this.steamName = json.steam_name;
    }
    if (json.steam_id !== undefined) {
      this.steamId = parseInt(json.steam_id);
    }
  }

  toJson(): any {
    return {
      steam_name: this.steamName,
      steam_id: this.steamId.toString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}
