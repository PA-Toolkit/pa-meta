import { Serializable } from "pa-common";
import { ArtistConstructor } from "./ArtistConstructor";
import { LinkType } from "./Enums";
import { LinkTypeError } from "./Errors";

/**
 * The song's artist.
 */
export class Artist implements Serializable {
  private _name = "Artist";
  private _link = "meganeko";
  private _linkType: LinkType = 4;

  /**
   * The artist's name.
   */
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  /**
   * The artist's music platform name.
   */
  public get link(): string {
    return this._link;
  }

  public set link(value: string) {
    this._link = value;
  }

  /**
   * The artist's music platform.
   */
  public get linkType(): LinkType {
    return this._linkType;
  }

  public set linkType(value: LinkType) {
    if (!(value in LinkType)) {
      throw new LinkTypeError(`Invalid link type: ${value}`);
    }
    this._linkType = value;
  }

  /**
   * A full URL to the artist's music platform. This depends on `link` and `linkType`. This field is read-only.
   */
  public get url(): string {
    switch (this._linkType) {
      case LinkType.Spotify:
        return `https://open.spotify.com/artist/${this._link}`;
      case LinkType.SoundCloud:
        return `https://soundcloud.com/${this._link}`;
      case LinkType.Bandcamp:
        return `https://${this._link}.bandcamp.com`;
      case LinkType.YoutubeMusic:
        return `https://www.youtube.com/user/${this._link}`;
      case LinkType.Newgrounds:
        return `https://${this._link}.newgrounds.com`;
    }
  }

  fromJson(json: ArtistConstructor) {
    if (json.name !== undefined) {
      this.name = json.name;
    }

    if (json.link !== undefined) {
      this.link = json.link;
    }

    if (json.linkType !== undefined) {
      this.linkType =
        typeof json.linkType === "string"
          ? parseInt(json.linkType)
          : json.linkType;
    }
  }

  toJson(): ArtistConstructor {
    const json = {} as ArtistConstructor;
    if (this.name !== undefined) {
      json.name = this.name;
    }
    if (this.link !== undefined) {
      json.link = this.link;
    }
    if (this.linkType !== undefined) {
      json.linkType = this.linkType.toString();
    }
    return json;
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(json: ArtistConstructor) {
    this.fromJson(json);
  }
}
