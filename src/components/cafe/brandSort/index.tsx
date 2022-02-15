import React from 'react';
import styles from 'styles/components/store/brandSort.module.scss';

function BrandSort() {
  return (
    <>
      <ul className={styles.navList}>
        <li className={styles.list}>떙처리콘</li>
        <li className={styles.list}>카페</li>
        <li className={styles.list}>편의점/마트</li>
        <li className={styles.list}>디저트</li>
        <li className={styles.list}>패스트푸드</li>
      </ul>
    </>
  );
}

export default BrandSort;
