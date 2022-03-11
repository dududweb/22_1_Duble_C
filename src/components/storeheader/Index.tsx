import React from 'react';
import styles from './styles.module.scss';

interface StoreHeaderProps {
  title?: string;
}

function StoreHeader({ title }: StoreHeaderProps) {
  console.log(title);
  return (
    <header className={styles.header}>
      <div className={styles.leftBox}>
        <button className={styles.backButton}>
          <img src="/images/icon/Back.png" alt="뒤로가기 버튼" />
        </button>
      </div>
      <h2 className={styles.title}>{title ? title : '니콘내콘'}</h2>
      <div className={styles.rightBox}>
        <button className={styles.rightButton}></button>
      </div>
    </header>
  );
}

export default StoreHeader;
