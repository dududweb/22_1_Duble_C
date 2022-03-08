import React from 'react';
import styles from './styles.module.scss';
import { Options } from 'types/items';

interface OptionContainerProps {
  optionData: Options[];
  discountRate: number;
}

function OptionContainer({ optionData, discountRate }: OptionContainerProps) {
  console.log('optionData', optionData);
  const replaceDate = optionData.map(list => {
    return list.expireAt.replaceAll('-', '.');
  });
  const sliceDate = replaceDate.map(list => {
    return list.slice(0, 10);
  });
  console.log('sliceDate', sliceDate);

  return (
    <div className={styles.optionContainer}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>옵션 선택하기</h3>
      </div>
      <div className={styles.optionWrap}>
        {optionData.map(options => {
          return (
            <div className={styles.optionList}>
              <div className={styles.optionCard}>
                <p className={styles.optionParagraph}>
                  <span className={styles.optionTitle}>유효기간</span>
                  <span className={styles.optionValue}>{sliceDate[0]}</span>
                </p>
                <p className={styles.optionParagraph}>
                  <span className={styles.optionTitle}>할인기간</span>
                  <span className={styles.optionValue}>
                    {options.sellingPrice}원
                  </span>
                </p>
              </div>
              <h3 className={styles.discountRate}>{discountRate}%</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OptionContainer;
