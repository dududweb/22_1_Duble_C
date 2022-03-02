import React from 'react';
import styles from 'styles/components/store/store.module.scss';

function ProductList() {
  return (
    <div>
      <div className={styles.count}>00개의 상품</div>
      <section className={styles.storeSection}></section>
    </div>
  );
}

export default ProductList;
