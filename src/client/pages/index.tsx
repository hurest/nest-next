import * as React from 'react';
import Counter from '../components/Counter';

interface Props {
  title: string;
}

export default function HomePage(props: Props): JSX.Element {
  return (
    <div>
      <h1>{props.title}</h1>
      <a href="/coffee">Coffee 페이지 이동</a>
      <div>
        <Counter initialCount={0} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      title: 'Nest.js + React + SSR',
    },
  };
};
