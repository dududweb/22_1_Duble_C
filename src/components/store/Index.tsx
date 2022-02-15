import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from './storeheader/Index';
import ProductsCard from './productCard/index';

function Store() {
  return (
    <div>
      <Storeheader />
      <div className={styles.count}>00개의 상품</div>
      <section className={styles.storeSection}>
        <ProductsCard />
      </section>
    </div>
  );
}

export default Store;
