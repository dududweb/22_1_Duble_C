import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';
import { Options } from 'types/items';
import { getDate } from 'utils/getDate';

interface OptionContentsProps {
  options: Options;
  discountRate: number | undefined;
  setSelectedOption: Dispatch<SetStateAction<Options | undefined>>;
}

function OptionContents({
  options,
  discountRate,
  setSelectedOption,
}: OptionContentsProps) {
  const date = getDate(options.expireAt);
  const price = Number(options.sellingPrice).toLocaleString();
  const handleOptionValue = () => {
    setSelectedOption(options);
  };
  return (
    <div className={styles.optionList} onClick={handleOptionValue}>
      <div className={styles.optionCard}>
        <p className={styles.optionParagraph}>
          <span className={styles.optionTitle}>유효기간</span>
          <span className={styles.optionValue}>{date} 까지</span>
        </p>
        <p className={styles.optionParagraph}>
          <span className={styles.optionTitle}>할인가</span>
          <span className={styles.optionValue}>{price}원</span>
        </p>
      </div>
      <h3 className={styles.discountRate}>{discountRate}%</h3>
    </div>
  );
}

export default OptionContents;
