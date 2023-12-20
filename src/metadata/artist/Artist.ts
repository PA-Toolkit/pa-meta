import { Serializable } from "pa-common";
import { ArtistParams } from "./ArtistParams";
import { LinkType } from "./Enums";
import { LinkTypeError } from "./Errors";

/**
 * The song's artist.
 */
export class Artist implements Serializable {
  /**
   * The artist's music platform.
   */
  linkType: LinkType = 4;

  /**
   * The artist's name.
   */
  name = "Artist";
  /**
   * The artist's music platform name.
   */
  link = "meganeko";

  constructor(params?: ArtistParams) {
    if (params) {
      this.fromJson({
        name: params.name,
        link: params.link,
        linkType: params.linkType?.toString(),
      });
    }
  }

  /**
   * Returns a full URL to the artist's music platform. The returned value depends on the values of {@link link} and {@link linkType}.
   */
  getUrl(): string {
    switch (this.linkType) {
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
      const linkType = parseInt(json.linkType);
      if (!(linkType in LinkType)) {
        throw new LinkTypeError(`Invalid link type: ${json.linkType}`);
      }
      this.linkType = linkType;
    }
  }

  toJson(): any {
    return {
      name: this.name,
      link: this.link,
      linkType: this.linkType?.toString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}
