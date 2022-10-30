import React, { useState } from 'react';

type Props = {
  count: number;
};

const Child = React.memo((props: Props) => {
  const { count } = props;
  console.log('render Child');
  return <p>Child: {count}</p>;
});

const TitleChild = React.memo(() => {
  console.log('Title');
  return <p>Title</p>;
});

export default function Test() {
  console.log('render App');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  return (
    <div>
      <TitleChild />
      <button type="button" onClick={() => setCount1(count1 + 1)}>
        countup App count
      </button>
      <button type="button" onClick={() => setCount2(count2 + 1)}>
        countup Child count
      </button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </div>
  );
}
