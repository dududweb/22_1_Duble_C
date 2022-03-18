import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';
import { Options } from 'types/items';
import OptionContents from './OptionContents';

interface OptionContainerProps {
  optionData: Options[];
  discountRate: number;
  setSelectedOption: Dispatch<SetStateAction<Options | undefined>>;
}

function OptionContainer({
  optionData,
  discountRate,
  setSelectedOption,
}: OptionContainerProps) {
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
              setSelectedOption={setSelectedOption}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OptionContainer;
