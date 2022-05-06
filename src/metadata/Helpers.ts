import { Metadata } from "./Metadata";
import { MetadataConstructor } from "./MetadataConstructor";

/**
 * Constructs a new Metadata.
 * @returns A new Metadata.
 */
export function CreateMetadata(): Metadata;
/**
 * Constructs a new Metadata.
 * @param constructor A Metadata constructor object.
 * @returns A new Metadata.
 */
export function CreateMetadata(constructor: MetadataConstructor): Metadata;
export function CreateMetadata(constructor?: MetadataConstructor): Metadata {
  return new Metadata(constructor || {});
}
