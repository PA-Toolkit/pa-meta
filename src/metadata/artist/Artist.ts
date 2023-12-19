import { Serializable } from "pa-common";
import { ArtistParams } from "./ArtistParams";
import { LinkType } from "./Enums";
import { LinkTypeError } from "./Errors";

/**
 * The song's artist.
 */
export class Artist implements Serializable {
  private _linkType: LinkType = 4;

  /**
   * The artist's name.
   */
  name = "Artist";
  /**
   * The artist's music platform name.
   */
  link = "meganeko";

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
   * Returns a full URL to the artist's music platform. The returned value depends on the values of {@link link} and {@link linkType}.
   */
  public getUrl(): string {
    switch (this._linkType) {
      case LinkType.Spotify:
        return `https://open.spotify.com/artist/${this.link}`;
      case LinkType.SoundCloud:
        return `https://soundcloud.com/${this.link}`;
      case LinkType.Bandcamp:
        return `https://${this.link}.bandcamp.com`;
      case LinkType.YoutubeMusic:
        return `https://www.youtube.com/user/${this.link}`;
      case LinkType.Newgrounds:
        return `https://${this.link}.newgrounds.com`;
    }
  }

  fromJson(json: any) {
    if (json.name !== undefined) {
      this.name = json.name;
    }

    if (json.link !== undefined) {
      this.link = json.link;
    }

    if (json.linkType !== undefined) {
      this.linkType = json.linkType;
    }
  }

  toJson(): any {
    return {
      name: this.name,
      link: this.link,
      linkType: this.linkType,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(json?: ArtistParams) {
    if (json) {
      this.fromJson({
        name: json.name,
        link: json.link,
        linkType: json.linkType,
      });
    }
  }
}
