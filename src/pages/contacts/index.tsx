import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { API } from 'constants/api';
import { path } from 'constants/path';
import styles from './styles.module.scss';
import { FaqType } from 'types/faq';
import axios from 'axios';
import PageHeader from 'components/PageHeader';
import FaqForm from 'components/FaqForm';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const { data } = await axios('https://api2.ncnc.app/qa-types');
  const getFaqData = await axios('https://api2.ncnc.app/qas?qaTypeId=1');

  const qaTypes = data.qaTypes;
  const faqData = getFaqData.data.qas;

  return {
    props: {
      qaTypes,
      faqData,
    },
  };
};

interface ContactsProps {
  qaTypes: FaqType[];
  faqData: any;
}

function Contacts({ qaTypes, faqData }: ContactsProps) {
  console.log(qaTypes);
  console.log('faqData', faqData);

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
            return <button className={styles.typeButton}>{type.name}</button>;
          })}
        </div>
      </div>
      <FaqForm faqData={faqData} />
    </div>
  );
}

export default Contacts;
