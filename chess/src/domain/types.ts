export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'G' | 'F' | 'H';
export type NFile = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Color = 'Black' | 'White';
export type Type = 'King' | 'Queen' | 'Bishop' | 'Knight' | 'Rook' | 'Pawn';
export type State = 'Ready' | 'Playing' | 'Check Mate';

export let TYPES = {
  IGameRepository: Symbol.for('IGameRepository'),
};
