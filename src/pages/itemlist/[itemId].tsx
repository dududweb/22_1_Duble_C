import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from '../../components/store/storeheader/Index';
import ProductCard from '../../components/store/productCard/index';

function ProductList() {
  return (
    <div>
      <Storeheader />
      <div className={styles.count}>00개의 상품</div>
      <section className={styles.storeSection}>
        <ProductCard />
      </section>
    </div>
  );
}

export default ProductList;
