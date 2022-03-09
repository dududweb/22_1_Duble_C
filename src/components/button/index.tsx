import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  isClickedModal: boolean;
  onClick: () => void;
}

function Button({ isClickedModal, onClick }: ButtonProps) {
  return (
    <button
      className={`${isClickedModal ? styles.button : styles.default}`}
      onClick={onClick}
    >
      {isClickedModal ? '구매하기' : '옵션 선택하기'}
    </button>
  );
}

export default Button;
