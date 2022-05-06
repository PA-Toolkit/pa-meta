import { Creator } from "./Creator";
import { CreatorConstructor } from "./CreatorConstructor";

/**
 * Constructs a new Creator.
 * @returns A new Creator.
 */
export function CreateCreator();
/**
 * Constructs a new Creator.
 * @param constructor A Creator constructor object.
 * @returns A new Creator.
 */
export function CreateCreator(constructor: CreatorConstructor);
export function CreateCreator(constructor?: CreatorConstructor): Creator {
  return new Creator(constructor || {});
}
