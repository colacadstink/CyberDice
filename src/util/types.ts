export type DiceField = DieInfo[];

export type DieOwner = 'top' | 'bottom';

export type DieInfo = {
  sideCount: 4 | 6 | 8 | 10 | 12 | 20,
  value: number,
  position: DieOwner,
  owner: DieOwner,
};
