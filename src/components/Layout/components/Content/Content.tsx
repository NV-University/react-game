import {type ReactNode} from 'react';

import styles from './Content.module.scss';

interface ContentProps {
  children: ReactNode;
}

function Content({children}: ContentProps) {
  return <div className={styles.root}>{children}</div>;
}

export default Content;
