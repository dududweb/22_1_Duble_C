import React, { useState, useEffect } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { API } from 'constants/api';
import { path } from 'constants/path';
import styles from './styles.module.scss';
import { FaqType, FaqDataType } from 'types/faq';
import axios from 'axios';
import PageHeader from 'components/PageHeader';
import FaqForm from 'components/FaqForm';

export const getStaticProps: GetStaticProps = async () => {
  const faqType = await axios(`${API.FAQ_TYPE}`);
  const faqList = await axios(`${API.FAQ_DATA}?qaTypeId=1`);

  return {
    props: {
      qaTypes: faqType.data.qaTypes,
      faqData: faqList.data.qas,
    },
  };
};

interface ContactsProps {
  qaTypes: FaqType[];
  faqData: FaqDataType[];
}

function Contacts({ qaTypes, faqData }: ContactsProps) {
  const [selectTap, setSelectTap] = useState(1);
  const [selectAnswerData, setSelectAnswerData] = useState(faqData);

  const selectTapData = async (id: number) => {
    try {
      const response = await axios.get(`${API.FAQ_DATA}?qaTypeId=${id}`);
      setSelectAnswerData(response.data.qas);
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
            return (
              <button
                key={type.id}
                className={
                  selectTap === type.id
                    ? styles.typeButtonRed
                    : styles.typeButton
                }
                onClick={() => selectTapData(type.id)}
              >
                {type.name}
              </button>
            );
          })}
        </div>
      </div>
      <FaqForm selectAnswerData={selectAnswerData} />
    </div>
  );
}

export default Contacts;
