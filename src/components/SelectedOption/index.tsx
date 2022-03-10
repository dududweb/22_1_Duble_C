import React from 'react';
import styles from './styles.module.scss';

function SelectedOption() {
  return (
    <div className={styles.selecteOption}>
      <div className={styles.innerBox}>
        <span className={styles.date}>2222까지</span>
        <span className={styles.price}>2222원</span>
        <span className={styles.icon}>
          <img src="/images/icon/option_edit.png" alt="옵션 편집이미지" />
        </span>
      </div>
    </div>
  );
}

export default SelectedOption;
