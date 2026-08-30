import type {DiceField, DieInfo} from "./types.ts";

export const dieFaces: Readonly<DieInfo['sideCount'][]> = Object.freeze([4, 6, 8, 10, 12, 20]);
export const dieOwners: Readonly<DieInfo['owner'][]> = Object.freeze(['top', 'bottom']);

export function generateInitialField(): DiceField {
  const field: DiceField = [];

  for (const owner of dieOwners) {
    for (const sideCount of dieFaces) {
      field.push({
        sideCount,
        value: rollDie(sideCount),
        owner,
        position: owner,
      })
    }
  }

  return field;
}

/**
 * Rolls a die. Specifically, returns a random number between 1 and sideCount.
 */
export function rollDie(sideCount: number): number {
  return Math.floor(Math.random() * sideCount) + 1;
}
