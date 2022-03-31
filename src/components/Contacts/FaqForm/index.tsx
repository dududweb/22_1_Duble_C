import React, { useState } from 'react';
import { FaqDataType } from 'types/faq';
import styles from './styles.module.scss';
import AnswerList from 'components/Contacts/AnswerList';
import QuestionList from 'components/Contacts/QuestionList';

interface FaqFormProps {
  selectQnAData: FaqDataType[];
}

function FaqForm({ selectQnAData }: FaqFormProps) {
  const [selectQuesId, setSelectQuesId] = useState<number | null>(null); //faq 현재 선택되어진 토글아이디를 나타낸다.

  const handleQuestion = (id: number | null) => {
    //선택된 토글 질문 아이디를 업데이트 해준다.
    setSelectQuesId(id); //ㅇ이쪼ㅗㅗㅗㅗㅗㅗㄱ에서 한버
  };

  return (
    <div className={styles.faqForm}>
      {selectQnAData.map(items => {
        return (
          <div className={styles.faqInner}>
            <QuestionList // 질문 리스트
              key={items.id}
              questionId={items.id}
              question={items.question}
              handleQuestion={handleQuestion}
              selectQuesId={selectQuesId}
              isSelected={items.id === selectQuesId}
              // isSelected 본인 토글을 다시 눌렀을 시에 열고닫는 기능.. 현재 QnA ID와 유저가 클릭한 질문 토글을 비교하여 불리언값으로 반환합니다.
            />
            {selectQuesId === items.id && <AnswerList answer={items.answer} />}
          </div> //해당 질문에 대한 답변 리스트 선택된 질문 탭아이디와 QnA id 가 맞는 id 만 클릭한 답변을 보여줍니다.
        );
      })}
    </div>
  );
}

export default FaqForm;
