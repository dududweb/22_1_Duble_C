import React from 'react';
import styles from './styles.module.scss';
import { Options } from 'types/items';

interface ButtonProps {
  isClickedModal: boolean;
  selectedOption: Options | undefined;
  onClick: () => void;
}

function Button({ isClickedModal, selectedOption, onClick }: ButtonProps) {
  return (
    <button
      className={`${
        isClickedModal && !selectedOption ? styles.button : styles.default
      }`}
      onClick={onClick}
    >
      {isClickedModal ? '구매하기' : '옵션 선택하기'}
    </button>
  );
}

export default Button;
