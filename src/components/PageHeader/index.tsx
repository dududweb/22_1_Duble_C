import React from 'react';
import styles from './styles.module.scss';
import Router, { useRouter } from 'next/router';

interface PageHeaderProps {
  title?: string;
}

function PageHeader({ title }: PageHeaderProps) {
  const router = useRouter();
  const url = router.asPath;
  console.log(url);
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.leftBox}>
          {url === '/' ? (
            <button className={styles.menuButton}>
              <img src="/images/icon/menu.png" alt="홈 버튼" />
            </button>
          ) : (
            <button className={styles.backButton} onClick={() => Router.back()}>
              <img src="/images/icon/Back.png" alt="뒤로가기 버튼" />
            </button>
          )}
        </div>
        <h2 className={styles.title}>{title ? title : '니콘내콘'}</h2>
        <div className={styles.rightBox}>
          <button className={styles.rightButton}></button>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
