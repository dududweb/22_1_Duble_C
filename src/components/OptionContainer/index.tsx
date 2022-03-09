import React from 'react';
import styles from './styles.module.scss';
import { Options } from 'types/items';
import OptionContents from './OptionContents';

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
    return {
      expireAt: list.slice(0, 10),
    };
  });

  const 새로운배열저장 = [...optionData, ...sliceDate];
  console.log('새로운배열저장', 새로운배열저장);

  console.log(replaceDate);
  console.log('sliceDate', sliceDate);

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
