import React from 'react';

type MainProps = {
  list: {}[];
};

function Main({ list }: MainProps) {
  console.log(list);
  return <div>Main</div>;
}

export default Main;

export const getServerSideProps = async () => {
  const res = await fetch('https://api2.ncnc.app/con-category1s');
  const list = await res.json();

  return {
    props: {
      list,
    },
  };
};
