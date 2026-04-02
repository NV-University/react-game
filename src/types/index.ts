export enum EBoardItem {
  O = 'o',
  X = 'x',
  FREE = 'free',
}

export type GameBoard = EBoardItem[][];

export type OnBoardItemSelect = (row: number, col: number) => void;
