import {createContext, type ReactNode, useCallback, useState} from 'react';

import {EBoardItem, type GameBoard, type OnBoardItemSelect} from '@/types';

type GameContextType = {
  board: GameBoard;
  onSelect: (row: number, col: number) => void;
};

const defaultBoard: GameBoard = [
  [EBoardItem.FREE, EBoardItem.FREE, EBoardItem.FREE],
  [EBoardItem.FREE, EBoardItem.FREE, EBoardItem.FREE],
  [EBoardItem.FREE, EBoardItem.FREE, EBoardItem.FREE],
];

const GameContext = createContext<GameContextType>({
  board: defaultBoard,
  onSelect: () => {},
});

interface GameProviderProps {
  children: ReactNode;
}

function GameProvider({children}: GameProviderProps) {
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

  return (
    <GameContext
      value={{
        board,
        onSelect: handleSelect,
      }}
    >
      {children}
    </GameContext>
  );
}

export {GameContext, GameProvider};
