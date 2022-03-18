import React, { useState } from 'react';
import { FaqDataType } from 'types/faq';
import styles from './styles.module.scss';
import AnswerList from 'components/AnswerList';
import FaqList from 'components/FaqList';

interface FaqFromProps {
  selectAnswerData: FaqDataType[];
}

function FaqForm({ selectAnswerData }: FaqFromProps) {
  const [selectQuesId, setSelectQuesId] = useState<number | null>(null);

  const handleQuestion = (id: number | null) => {
    setSelectQuesId(id);
  };

  return (
    <div className={styles.faqForm}>
      {selectAnswerData.map(items => {
        return (
          <div className={styles.faqInner}>
            <FaqList
              qasId={items.id}
              question={items.question}
              handleQuestion={handleQuestion}
              selectQuesId={selectQuesId}
              isSelected={items.id === selectQuesId}
            />
            {selectQuesId === items.id && <AnswerList answer={items.answer} />}
          </div>
        );
      })}
    </div>
  );
}

export default FaqForm;
