import {useContext} from 'react';

import Cell from './components/Cell/Cell';

import styles from './Board.module.scss';

import {GameContext} from '@/context';

function Board() {
  const {board} = useContext(GameContext);

  return (
    <div className={styles.root}>
      {board.map((row, rowIndex) =>
        row.map((item, colIndex) => <Cell key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} item={item} />)
      )}
    </div>
  );
}

export default Board;
