import React from 'react';
import styles from './styles.module.scss';
import { Options } from 'types/items';
import { getDate } from 'utils/getDate';

interface OptionContentsProps {
  options: Options;
  discountRate: number;
}

function OptionContents({ options, discountRate }: OptionContentsProps) {
  const date = getDate(options.expireAt);
  const price = Number(options.sellingPrice).toLocaleString();
  return (
    <div className={styles.optionList}>
      <div className={styles.optionCard}>
        <p className={styles.optionParagraph}>
          <span className={styles.optionTitle}>유효기간</span>
          <span className={styles.optionValue}>{date} 까지</span>
        </p>
        <p className={styles.optionParagraph}>
          <span className={styles.optionTitle}>할인기</span>
          <span className={styles.optionValue}>{price}원</span>
        </p>
      </div>
      <h3 className={styles.discountRate}>{discountRate}%</h3>
    </div>
  );
}

export default OptionContents;
