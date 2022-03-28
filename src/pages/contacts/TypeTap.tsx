import React from 'react';
import styles from './styles.module.scss';

interface TypeTapProps {
  selectTap: number;
  typeId: number;
  selectTapGetData: (id: number) => void;
  name: string;
}

function TypeTap({ selectTap, typeId, selectTapGetData, name }: TypeTapProps) {
  const handleTapGetData = () => {
    selectTapGetData(typeId);
  };
  return (
    <button
      className={
        selectTap === typeId ? styles.typeButtonRed : styles.typeButton
      }
      onClick={handleTapGetData}
    >
      {name}
    </button>
  );
}

export default TypeTap;
