import {useCallback, useState} from 'react';

import {EBoardItem, type GameBoard, type OnBoardItemSelect} from '@/types';

const defaultBoard: GameBoard = [
  [EBoardItem.FREE, EBoardItem.FREE, EBoardItem.FREE],
  [EBoardItem.FREE, EBoardItem.FREE, EBoardItem.FREE],
  [EBoardItem.FREE, EBoardItem.FREE, EBoardItem.FREE],
];

function useGame() {
  const [board, setBoard] = useState<GameBoard>(defaultBoard);

  const handleSelect: OnBoardItemSelect = useCallback((row, col) => {
    setBoard(board => {
      const newBoard = [...board];
      newBoard[row][col] =
        newBoard[row][col] === EBoardItem.FREE
          ? EBoardItem.O
          : newBoard[row][col] === EBoardItem.X
            ? EBoardItem.O
            : EBoardItem.X;
      return newBoard;
    });
  }, []);

  console.log(board);

  return {
    board,
    onSelect: handleSelect,
  };
}

export default useGame;
