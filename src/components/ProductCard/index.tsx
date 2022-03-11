import React from 'react';
import styles from './styles.module.scss';
import { ConItem } from 'types/productOfBrands';

function ProductCard({
  name,
  id,
  discountRate,
  originalPrice,
  minSellingPrice,
  ncSellingPrice,
  conCategory2Id,
  tip,
  information,
  info,
  warning,
  isOnlyAccount,
  imageUrl,
}: ConItem) {
  console.log('productList.id>>>>', id);
  return (
    <div className={styles.itemContents}>
      <div className={styles.itemImage}>
        <img src={imageUrl} alt="img" />
      </div>
      <div className={styles.itemText}>
        <div className={styles.productName}>{name}</div>
        <div>
          <span className={styles.sales}>{discountRate}%</span>
          <span className={styles.price}>{minSellingPrice}원</span>
          <span className={styles.disablePrice}>{originalPrice}원</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
