import React from 'react';
import styles from './styles.module.scss';
import { Options } from 'types/items';
import { getDate } from 'utils/getDate';
import { formatingPrice } from 'utils/formatingPrice';

interface SelectedOptionProps {
  selectedOption: Options;
  resetSelectValue: () => void;
}

function SelectedOption({
  selectedOption,
  resetSelectValue,
}: SelectedOptionProps) {
  console.log(typeof 'adf', selectedOption.sellingPrice);
  const date = getDate(selectedOption.expireAt);
  const price = formatingPrice(selectedOption.sellingPrice);

  return (
    <div className={styles.selecteOption}>
      <div className={styles.innerBox} onClick={resetSelectValue}>
        <span className={styles.date}>{date} 까지 /</span>
        <span className={styles.price}>&nbsp;{price}원</span>
        <span className={styles.icon}>
          <img src="/images/icon/option_edit.png" alt="옵션 편집이미지" />
        </span>
      </div>
    </div>
  );
}

export default SelectedOption;
