import React from 'react';
import styles from './styles.module.scss';
import { Options } from 'types/items';
import OptionContents from './OptionContents';

interface OptionContainerProps {
  optionData: Options[];
  discountRate: number;
}

function OptionContainer({ optionData, discountRate }: OptionContainerProps) {
  return (
    <div className={styles.optionContainer}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>옵션 선택하기</h3>
      </div>
      <div className={styles.optionWrap}>
        {optionData.map((options, idx) => {
          return (
            <OptionContents
              options={options}
              key={idx}
              discountRate={discountRate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OptionContainer;
