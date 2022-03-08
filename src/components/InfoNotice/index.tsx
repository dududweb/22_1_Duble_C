import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Items } from 'types/items';

interface InfoNoticeProps {
  warningData: string;
}

function InfoNotice({ warningData }: InfoNoticeProps) {
  const warningArray = warningData.split('\n\n');
  const 워닝문구_분리 = warningArray.map(list => {
    return list.split(']\n');
  });
  const 워닝문구_대체 = 워닝문구_분리.map(list => {
    return {
      title: list[0].replace('[', ''),
      contents: list[1].replaceAll('-', ''),
    };
  });
  const 워닝문구_분할완성배열 = 워닝문구_대체.map(list => {
    return {
      title: list.title,
      contents: list.contents.split('\n'),
    };
  });
  console.log(워닝문구_분할완성배열);

  return (
    <div className={styles.infoNotice}>
      <div className={styles.warningInfo}>
        {워닝문구_분할완성배열 &&
          워닝문구_분할완성배열.map((warning, idx) => {
            return (
              <div key={idx}>
                <h2 className={styles.warningTitle}>{warning.title}</h2>
                {warning.contents?.map(p => {
                  return <p className={styles.warningContents}>· &nbsp;{p}</p>;
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default InfoNotice;
