import React from 'react';
import { FaqDataType } from 'types/faq';
import styles from './styles.module.scss';

interface FaqFromProps {
  faqData: FaqDataType[];
}

function FaqForm({ faqData }: FaqFromProps) {
  console.log('ㅇㅁㅅㅁ', faqData);
  return (
    <div className={styles.faqForm}>
      <div className={styles.faqList}>
        <span className={styles.questionsIcon}>Q</span>
        <span className={styles.questionsTitle}>타이틀</span>
        <span className={styles.questionsDetailViewIcon}>
          <img src="/images/icon/Back.png" alt="질문 자세히보기" />
        </span>
      </div>
      <div className={styles.answerForm}>
        <p className={styles.answer}>asdfas</p>
      </div>
    </div>
  );
}

export default FaqForm;
