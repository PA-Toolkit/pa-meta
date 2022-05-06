import { Serializable } from "pa-common";
import { CreatorConstructor } from "./CreatorConstructor";
import { CreatorParseError } from "./Errors";

/**
 * The creator of the level.
 */
export class Creator implements Serializable {
  private _steamName = "Vitamin Games";
  private _steamId: number;

  /**
   * The creator's Steam name.
   */
  public get steamName(): string {
    return this._steamName;
  }

  public set steamName(value: string) {
    this._steamName = value;
  }

  /**
   * The creator's SteamID3. It's assigned in the Project Arrhythmia editor.
   */
  public get steamId(): number {
    return this._steamId;
  }

  public set steamId(value: number) {
    this._steamId = value;
  }

  fromJson(json: CreatorConstructor) {
    if (json.steamName !== undefined && json.steam_name !== undefined) {
      throw new CreatorParseError(
        `The object has both steamName and steam_name fields: ${json.steamName}, ${json.steam_name}`
      );
    }
    if (json.steamName !== undefined) {
      this.steamName = json.steamName;
    }
    if (json.steam_name !== undefined) {
      this.steamName = json.steam_name;
    }
    if (json.steamId !== undefined && json.steam_id !== undefined) {
      throw new CreatorParseError(
        `The object has both steamId and steam_id fields: ${json.steamId}, ${json.steam_id}`
      );
    }
    if (json.steamId !== undefined) {
      this.steamId =
        typeof json.steamId === "string"
          ? parseInt(json.steamId)
          : json.steamId;
    }
    if (json.steam_id !== undefined) {
      this.steamId =
        typeof json.steam_id === "string"
          ? parseInt(json.steam_id)
          : json.steam_id;
    }
  }

  toJson(): CreatorConstructor {
    const json = {} as CreatorConstructor;
    if (this.steamName !== undefined) {
      json.steam_name = this.steamName;
    }
    if (this.steamId !== undefined) {
      json.steam_id = this.steamId.toString();
    }
    return json;
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(json: CreatorConstructor) {
    this.fromJson(json);
  }
}
