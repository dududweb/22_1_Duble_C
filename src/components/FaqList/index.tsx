import React from 'react';
import styles from './styles.module.scss';
import { FaqDataType } from 'types/faq';

interface FaqListProps {
  qasId: number;
  question: string;
  handleQuestion: any;
  selectQuesId: number | null;
}

function FaqList({
  qasId,
  question,
  selectQuesId,
  handleQuestion,
}: FaqListProps) {
  const handleTap = () => {
    handleQuestion(selectQuesId ? null : qasId);
  };

  return (
    <div className={styles.faqList} onClick={handleTap}>
      <span className={styles.questionsIcon}>Q.</span>
      <span className={styles.questionsTitle}>{question}</span>
      <span
        className={
          selectQuesId === qasId
            ? styles.questionsDetailViewIconOpen
            : styles.questionsDetailViewIcon
        }
      >
        <img src="/images/icon/Back.png" alt="질문 자세히보기" />
      </span>
    </div>
  );
}

export default FaqList;
