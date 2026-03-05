import styles from './Title.module.scss';

interface TitleProps {
  title: string;
}

function Title({title}: TitleProps) {
  return <div className={styles.root}>{title}</div>;
}

export default Title;
