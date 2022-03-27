import React from 'react';
import styles from './styles.module.scss';
import { ConItem } from 'types/productOfBrands';
import { formatingPrice } from 'utils/formatingPrice';

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
  const discountPrice = formatingPrice(minSellingPrice);
  const fullPrice = formatingPrice(originalPrice);

  return (
    <div className={styles.itemContents}>
      <div className={styles.itemImage}>
        <img src={imageUrl} alt="img" />
      </div>
      <div className={styles.itemText}>
        <div className={styles.productName}>{name}</div>
        <div>
          <span className={styles.sales}>{discountRate}%</span>
          <span className={styles.price}>{discountPrice}원</span>
          <span className={styles.disablePrice}>{fullPrice}원</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
