import { layOutPropsType } from '../types/interface';
import styles from 'styles/main.module.scss';

const Layout = (props: layOutPropsType) => {
  const { children } = props;
  return (
    <>
      <div className={styles.app_layout}>{children}</div>
    </>
  );
};

export default Layout;
