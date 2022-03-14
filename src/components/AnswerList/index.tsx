import React from 'react';
import styles from './styles.module.scss';

interface Props {
  answer: string;
}

function AnswerList({ answer }: Props) {
  console.log(typeof answer);
  return (
    <div className={styles.answerForm}>
      <p className={styles.answer}>{answer}</p>
    </div>
  );
}

export default AnswerList;
