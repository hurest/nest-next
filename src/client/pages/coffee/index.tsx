import * as React from 'react';

interface Props {
  coffee: { title: string; description: string };
}

export default function CoffeePage(props: Props): JSX.Element {
  return (
    <div>
      <h1>{props.coffee.title}</h1>
      <p>{props.coffee.description}</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.sampleapis.com/coffee/hot');
  const data = await res.json();

  return {
    props: {
      coffee: data[0],
    },
  };
};
