import React from 'react';
import styles from './styles.module.scss';

interface QuestionListProps {
  questionId: number;
  question: string;
  handleQuestion: (id: number | null) => void;
  isSelected: number | boolean;
  selectQuesId: number | null;
}

function QuestionList({
  questionId,
  question,
  selectQuesId,
  isSelected,
  handleQuestion,
}: QuestionListProps) {
  const handleToggleTap = () => {
    handleQuestion(isSelected ? null : questionId);
    // isSelected가 트루이면 켜진 토글을 꺼주고, 펊스면(즉 1번 질문에서 2번 질문 클릭)하면 해당 아이디를 넘겨주어 다른 토글이 열리게 합니다.
  };

  return (
    <div className={styles.faqList} onClick={handleToggleTap}>
      <span className={styles.questionsIcon}>Q.</span>
      <span className={styles.questionsTitle}>{question}</span>
      <span
        className={
          // 불리언에 따른 토글 화살표 방향
          isSelected
            ? styles.questionsDetailViewIconOpen
            : styles.questionsDetailViewIcon
        }
      >
        <img src="/images/icon/Back.png" alt="질문 자세히보기" />
      </span>
    </div>
  );
}

export default QuestionList;
