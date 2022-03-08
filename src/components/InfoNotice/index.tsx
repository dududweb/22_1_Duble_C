import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Items } from 'types/items';

interface InfoNoticeProps {
  warningData: string;
}

function InfoNotice({ warningData }: InfoNoticeProps) {
  const warningArray = warningData.split('\n\n');
  console.log('warningArray', warningArray);
  const splitWarningArray = warningArray
    ?.map(strings => strings.split(']\n'))
    ?.map(
      strings =>
        (strings = [
          strings[0].replace('[', ''),
          strings[1]?.replace(/-/g, '·'),
        ]),
    );
  return (
    <div className={styles.infoNotice}>
      <div className={styles.warningInfo}>
        {splitWarningArray &&
          splitWarningArray.map((warning, idx) => {
            return (
              <div key={idx}>
                <h2 className={styles.warningTitle}>{warning[0]}</h2>
                <p className={styles.warningContents}>{warning[1]}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default InfoNotice;
