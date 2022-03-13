import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { API } from 'constants/api';
import { path } from 'constants/path';
import axios from 'axios';
import PageHeader from 'components/PageHeader';
import styles from './styles.module.scss';
import { FaqType } from 'types/faq';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const { data } = await axios('https://api2.ncnc.app/qa-types');

  const qaTypes = data.qaTypes;

  return {
    props: {
      qaTypes,
    },
  };
};

interface ContactsProps {
  qaTypes: FaqType[];
}

function Contacts({ qaTypes }: ContactsProps) {
  console.log(qaTypes);
  return (
    <div className={styles.contacts}>
      <PageHeader title="고객센터" />
      <div className={styles.timeNotice}>
        <h3>상담시간 안내</h3>
        <p>평일 10:00 - 18:00</p>
        <p>점심시간 12:30 - 13:30 / 토 ・ 일 ・ 공휴일 휴무</p>
      </div>
      <div className={styles.faqBox}>
        <h3>자주 묻는 질문</h3>
        <div className={styles.faqTypeBox}>
          {qaTypes.map(type => {
            return <button className={styles.typeButton}>{type.name}</button>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
