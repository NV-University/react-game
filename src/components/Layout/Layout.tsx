import {type ReactNode} from 'react';
import clsx from 'clsx';

import Content from './components/Content/Content';
import Title from './components/Title/Title';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

function Layout({children, className, title}: LayoutProps) {
  return (
    <div className={clsx(className, styles.root)}>
      {title && <Title title={title} />}
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
