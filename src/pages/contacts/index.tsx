import React, { useState } from 'react';
import type { GetStaticProps } from 'next';
import { API } from 'constants/api';
import styles from './styles.module.scss';
import { FaqType, FaqDataType } from 'types/faq';
import axios from 'axios';
import PageHeader from 'components/common/PageHeader';
import FaqForm from 'components/Contacts/FaqForm';
import TypeTap from './TypeTap';

export const getStaticProps: GetStaticProps = async () => {
  const faqType = await axios(`${API.FAQ_TYPE}`); // 구매 or 판매 버튼 타입을 서버로부터 가져오기
  const faqList = await axios(`${API.FAQ_DATA}?qaTypeId=1`); // 컨택트 페이지 진입 시에 구매타입 데이터를 보여주기 위해 호출 (초기화면 데이터)

  return {
    props: {
      qaTypes: faqType.data.qaTypes,
      faqData: faqList.data.qas,
    },
  };
};

interface ContactsProps {
  //데이터 타이핑
  qaTypes: FaqType[];
  faqData: FaqDataType[];
}

function Contacts({ qaTypes, faqData }: ContactsProps) {
  const [selectTap, setSelectTap] = useState(1); // 현재 선택된 탭 state 초기값으로 구매1 이 선택되어지게 선언 할당
  const [selectQnAData, setSelectQnAData] = useState(faqData); // 상단에서 호출한 구매1 의 질문/ 답변 데이터 state저장

  const selectTapGetData = async (id: number) => {
    // 구매 / 판매 셀렉트 탭을 클릭시 데이터 호출하는 함수
    try {
      //async await 쓴 이유
      const response = await axios.get(`${API.FAQ_DATA}?qaTypeId=${id}`); // 구매 / 판매 셀렉트 탭을 클릭 시 해당 데이터 호출
      setSelectQnAData(response.data.qas); //데이터 저장
    } catch (error) {
      console.error(error);
    }
    setSelectTap(id); // 선택시 탭 보더 색상 변경
  };

  return (
    <div className={styles.contacts}>
      <PageHeader title="고객센터" />
      <div className={styles.timeNotice}>
        <h3>상담시간 안내</h3>
        <p>평일 10:00 - 18:00</p>
        <p>점심시간 12:30 - 13:30 / 토 ・ 일 ・ 공휴일 휴무</p>
      </div>
      <div className={styles.faqBox}>
        <h3 className={styles.faqTitle}>자주 묻는 질문</h3>
        <div className={styles.faqTypeBox}>
          {qaTypes.map(type => {
            //탭 버튼 Map
            return (
              <TypeTap
                key={type.id}
                selectTap={selectTap}
                typeId={type.id}
                selectTapGetData={selectTapGetData}
                name={type.name}
              />
            );
          })}
        </div>
      </div>
      <FaqForm selectQnAData={selectQnAData} />
    </div>
  );
}

export default Contacts;
