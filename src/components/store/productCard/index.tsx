import React from 'react';
import styles from 'styles/components/store/productCard.module.scss';

function ProductsCard() {
  return (
    <div className={styles.product}>
      <section className={styles.itemContainer}>
        <div className={styles.itemImage}>
          <img src="/images/icon/Back.svg" alt="img" />
        </div>
        <div>
          <div className={styles.productName}>카페아메리카노T</div>
          <div>
            <span className={styles.sales}>20%</span>
            <span className={styles.price}>10,000원</span>
            <span className={styles.disablePrice}>12,000원</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsCard;
