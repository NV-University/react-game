import {useContext} from 'react';

import {EBoardItem} from '@/types';

import styles from './Cell.module.scss';

import {GameContext} from '@/context';

interface CellProps {
  col: number;
  item: EBoardItem;
  row: number;
}

function Cell({item, col, row}: CellProps) {
  const {onSelect} = useContext(GameContext);

  const data = item === EBoardItem.FREE ? '' : item === EBoardItem.O ? 'O' : 'X';

  const handleClick = () => {
    onSelect(row, col);
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      {data}
    </div>
  );
}

export default Cell;
