import { LinkType } from "./Enums";

/**
 * An artist constructor object.
 */
export interface ArtistConstructor {
  /**
   * The artist's name.
   */
  name?: string;

  /**
   * The artist's music platform name.
   */
  link?: string;

  /**
   * The artist's music platform.
   */
  linkType?: LinkType | string;
}
